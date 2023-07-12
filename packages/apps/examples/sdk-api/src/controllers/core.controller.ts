import { Request, Response } from 'express';
import { core } from '../client';
import { QNFetchNFTInput, QNFetchNFTResult, viem } from '@qn-oss/libs/sdk';

export default {
  sdk_getChainId: async (req: Request, res: Response) => {
    try {
      const chainId = core.client?.chain?.id;
      return res.status(200).send({ chainId: chainId?.toString() });
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  sdk_qn_fetchNFTs: async (req: Request, res: Response) => {
    try {
      const input: QNFetchNFTInput = {
        wallet: req.params.wallet,
        contracts: ['0x8D0501d85becDA92B89E56177dDfcEA5Fc1f0AF2'],
      };
      const response = await core.client.qn_fetchNFTs(input);
      console.log(response);
      response satisfies QNFetchNFTResult;
      console.log(req.params.wallet);
      return res.status(200).send(response);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  viemMethods: async (req: Request, res: Response) => {
    try {
      const response = viem.fromHex('0x48656c6c6f20776f726c642e', 'string');
      return res.status(200).send({ response });
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
