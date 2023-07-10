import { Core, CoreArguments } from '../../src';

const coreOpts: CoreArguments = {
  endpointUrl: process.env['QUICKNODE_ENDPOINT_URL'] || '',
  config: {
    addOns: { nftTokenV2: true },
  },
};

export const core = new Core(coreOpts);
