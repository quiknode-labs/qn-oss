import { Core, CoreArguments } from '../../src';

const coreOpts: CoreArguments = {
  // This endpoint URL hostname has to match what is recorded locally with what is on CI. In github actions,
  // we can put a redacted auth token since we filter it out with polly, for example:
  // https://green-bitter-firefly.quiknode.pro/redacted/
  endpointUrl: process.env['QUICKNODE_ENDPOINT_URL'] || '',
  config: {
    addOns: { nftTokenV2: true },
  },
};

export const core = new Core(coreOpts);
