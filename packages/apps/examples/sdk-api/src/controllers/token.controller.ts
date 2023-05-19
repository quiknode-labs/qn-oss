import { Request, Response } from 'express';
import { tokens } from '../client';

export default {
  getBalancesByWalletEns: async (req: Request, res: Response) => {
    try {
      const balances = await tokens.getBalancesByWalletENS({
        ensName: req.params.ensResource,
        first: 5,
      });
      return res.status(200).send(balances);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
