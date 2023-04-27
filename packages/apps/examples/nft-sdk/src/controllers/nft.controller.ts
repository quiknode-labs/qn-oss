import QuickNode from '@qn-oss/libs/sdk';
import { Request, Response } from 'express';

const opts: any = { gqlApiKey: process.env['QUICKNODE_API_KEY'] || '' };

if (process.env.ADDITIONAL_SDK_HEADER_KEY) {
  opts.additionalHeaders = {
    [process.env.ADDITIONAL_SDK_HEADER_KEY]:
      process.env.ADDITIONAL_SDK_HEADER_VALUE,
  };
}

console.log(opts);

const client = new QuickNode.api(opts);

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    try {
      const NFTs = await client.nft.getAllByWalletENS({
        ensName: req.params.ensResource,
        first: 2,
        chain: 'polygon',
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
