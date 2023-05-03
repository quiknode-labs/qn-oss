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

const nfts = new QuickNode.API(opts).nfts;

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    try {
      const NFTs = await nfts.getByWalletENS({
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
      const NFTs = await nfts.getByWalletAddress({
        address: req.params.address,
        first: 5,
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getNFTsByContractAddress: async (req: Request, res: Response) => {
    try {
      const NFTs = await nfts.getByContractAddress({
        contractAddress: req.params.contractAddress,
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
