import { Request, Response } from 'express';
import { core } from '../client';

export default {
  readContract: async (req: Request, res: Response) => {
    try {
      const contract = await core.getContract({
        address: req.params.contractAddress as `0x${string}`,
      });

      const name = await contract.read.name();

      console.log(name);
      return res.status(200).send({ name });
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  sdk_qn_fetchNFTs: async (req: Request, res: Response) => {
    try {
      const client = await core.createQNClient();
      const response = await client.qn_fetchNFTs({
        wallet: req.params.wallet,
        contracts: ['0x2106C00Ac7dA0A3430aE667879139E832307AeAa'],
      });
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
