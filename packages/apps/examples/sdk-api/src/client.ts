import QuickNode from '@qn-oss/libs/sdk';

const opts: any = {
  graphApiKey: process.env['QUICKNODE_API_KEY'] || '',
};

if (process.env.ADDITIONAL_SDK_HEADER_KEY) {
  opts.additionalHeaders = {
    [process.env.ADDITIONAL_SDK_HEADER_KEY]:
      process.env.ADDITIONAL_SDK_HEADER_VALUE,
  };
}
export const api = new QuickNode.API(opts);
export const nfts = api.nfts;
export const tokens = api.tokens;
export const contracts = api.contracts;
export const transactions = api.transactions;
