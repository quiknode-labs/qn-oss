import { QuickNodeSDK } from '@quicknode/sdk';
import { Request, Response } from 'express';

const client = new QuickNodeSDK();

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    const NFTs = await client.nft.getNFTsByWalletENS({
      ensName: req.params.ensResource,
      first: 5,
    });
    res.status(200).send(NFTs);
  },

  getNFTsByContractAddress: async (req: Request, res: Response) => {
    const NFTs = await client.nft.getNFTsByContractAddress({
      address: req.params.address,
      first: 5,
    });
    res.status(200).send(NFTs);
  },

  getNFTsByWalletAddress: async (req: Request, res: Response) => {
    const NFTs = await client.nft.getNFTsByWalletAddress({
      address: req.params.walletAddress,
      first: 2,
      after: req.params?.after,
    });
    res.status(200).send(NFTs);
  },
};
