import { QuickNodeSDK } from '@quicknode/sdk';
import { Request, Response } from 'express';

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    const client = new QuickNodeSDK();
    const NFTs = await client.nft.getNFTsByWalletENS({
      ensName: req.params.ensResource,
      first: 5,
    });
    res.status(200).send(NFTs);
  },
};
