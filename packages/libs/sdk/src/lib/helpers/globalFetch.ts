import fetch, { Headers, Request, Response } from 'cross-fetch';

export function setupGlobalFetch() {
  // Required for viem to work in node
  if (!globalThis.fetch) {
    globalThis.fetch = fetch;
    globalThis.Headers = Headers;
    globalThis.Request = Request;
    globalThis.Response = Response;
  }
}
