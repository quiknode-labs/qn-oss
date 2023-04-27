import QuickNode from '@qn-oss/libs/sdk';
import { Request, Response } from 'express';

const opts: any = {
  gqlApiKey: process.env['QUICKNODE_API_KEY'] || '',
};

if (process.env.ADDITIONAL_SDK_HEADER_KEY) {
  opts.additionalHeaders = {
    [process.env.ADDITIONAL_SDK_HEADER_KEY]:
      process.env.ADDITIONAL_SDK_HEADER_VALUE,
  };
}

const client = new QuickNode.api(opts);

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    try {
      const NFTs = await client.nft.getAllByWalletENS({
        ensName: req.params.ensResource,
        first: 2,
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getNFTsByAddress: async (req: Request, res: Response) => {
    try {
      const NFTs = await client.nft.getAllByWalletAddress({
        address: req.params.address,
        first: 5,
        after: 'T2Zmc2V0Q29ubmVjdGlvbjox',
        chain: 'polygon',
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
