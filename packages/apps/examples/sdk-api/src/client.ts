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

export const nfts = new QuickNode.API(opts).nfts;
export const events = new QuickNode.API(opts).events;