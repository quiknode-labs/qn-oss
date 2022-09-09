import { IcyGraphQLSDK } from '@quicknode/icy-graphql-client';
import { Request, Response } from 'express';

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    const client = new IcyGraphQLSDK();
    const NFTs = await client.nft.getNFTsByWallet({
      ensName: req.params.ensResource,
      first: 5,
    });
    res.status(200).send(NFTs);
  },
};
