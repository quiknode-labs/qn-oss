import { Core, CoreArguments } from '../../src';

const coreOpts: CoreArguments = {
  // This endpoint URL hostname has to match what is recorded locally with what is on CI. In github actions,
  // we can put a invalidated auth token since we filter it out with polly.
  endpointUrl:
    process.env['QUICKNODE_ENDPOINT_URL'] || 'thisisnotanendpoint.example.com',
  config: {
    addOns: { nftTokenV2: true },
  },
};

export const core = new Core(coreOpts);
