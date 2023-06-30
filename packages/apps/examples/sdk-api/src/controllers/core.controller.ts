import { Request, Response } from 'express';
import { core } from '../client';
import { QNFetchNFTInput, QNFetchNFTsResponse } from '@qn-oss/libs/sdk';

export default {
  sdk_qn_fetchNFTs: async (req: Request, res: Response) => {
    try {
      const client = await core.createQNClient({
        addOns: { nftTokenV2: true },
      });
      const input: QNFetchNFTInput = {
        wallet: req.params.wallet,
        contracts: ['0x2106C00Ac7dA0A3430aE667879139E832307AeAa'],
      };
      const response = await client.qn_fetchNFTs(input);
      response satisfies QNFetchNFTsResponse;
      return res.status(200).send(response);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  viemMethods: async (req: Request, res: Response) => {
    try {
      const response = core.viem.fromHex(
        '0x48656c6c6f20776f726c642e',
        'string'
      );
      return res.status(200).send({ response });
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
