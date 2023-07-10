import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import { Polly } from '@pollyjs/core';
import FileSystemPersister from '@pollyjs/persister-fs';
import url from 'node:url';

/**
 * Sets up PollyJS to record/replay network interactions performed in a unit test.
 * Usage: Provide a test `recordingName` string for saving the interaction details and a `testBody`
 * function for test execution.
 * Set `recordIfMissing` to true if you need to record new interactions, otherwise set it to false
 * to re-use a previously recorded interaction by the name `recordingName`.
 * Network interactions are saved in the `recordings/` directory.
 * https://netflix.github.io/pollyjs/#/README
 * This is analogous to how the VCR gem in Ruby.
 */
export default async function withPolly(
  {
    recordingName,
    recordIfMissing = false,
    recordFailedRequests = false,
  }: {
    recordingName: string;
    recordIfMissing?: boolean;
    recordFailedRequests?: boolean;
  },
  testBody: (polly: Polly) => Promise<any>
) {
  Polly.register(NodeHttpAdapter);
  Polly.register(FileSystemPersister);

  const polly = new Polly(recordingName, {
    adapters: ['node-http'],
    persister: 'fs',
    recordIfMissing,
    recordFailedRequests,
    // @ts-ignore
    logging: false,
    matchRequestsBy: {
      headers: {
        exclude: [
          'X-API-KEY',
          'x-api-key',
          'x-quicknode-sdk',
          'x-quicknode-sdk-version',
          'content-length',
        ],
      },
      // We redact quicknode api keys in URL paths. There is still the hostname that can match, which doesn't
      // have sensitive info. This could be an issue if we ever need to match on pathname i.e. REST
      // or non-JSONRPC requests
      url: {
        protocol: true,
        username: false,
        password: false,
        hostname: true,
        port: false,
        pathname: (pathname, req) => {
          // Only don't match on pathname for endpoint URLs because the sensitive info will have been redacted
          if (req.url.includes('quiknode.pro')) return '';
          return pathname;
        },
        hash: false,
      },
      order: false,
      // @ts-ignore
      body(body, _) {
        // JSONRPC request JSON body ID property seems to be non-deterministic, so we don't use
        // it for recording matching.
        const json = JSON.parse(body);
        delete json.id;
        return JSON.stringify(json);
      },
    },
  });
  polly.configure({
    persisterOptions: {
      fs: { recordingsDir: 'packages/libs/sdk/spec/recordings' },
    },
  });
  try {
    // Prevent Polly from recording requests to localhost (when running RequestHandler API tests)
    // We only want to record external requests.
    polly.server
      .any()
      // @ts-ignore
      .filter((req) => /^127.0.0.1:[0-9]+$/.test(req.headers.host))
      .passthrough();

    // Remove the x-api-key header from recorded requests
    const { server } = polly;
    server.any().on('beforePersist', (req, recording) => {
      const requestUrl: string = recording.request.url;
      if (requestUrl.includes('quiknode.pro')) {
        const safeUrl = new URL(requestUrl).origin;
        recording.request.url = safeUrl;
      }

      recording.request.headers = recording.request.headers.filter(
        ({ name }: { name: string }) => name !== 'x-api-key'
      );
    });

    return await testBody(polly);
  } finally {
    await polly.stop();
  }
}
