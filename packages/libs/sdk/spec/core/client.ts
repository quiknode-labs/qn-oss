import { Core, CoreArguments, QNCoreClient } from '../../src';

const coreOpts: CoreArguments = {
  endpointUrl: process.env['QUICKNODE_ENDPOINT_URL'] || '',
};

export const core = new Core(coreOpts);

export async function createCoreTestClient(): Promise<QNCoreClient> {
  const coreClient = await core.createQNClient({
    addOns: {
      nftTokenV2: true,
    },
  });
  return coreClient;
}
