import { Request, Response } from 'express';
import { transactions } from '../client';

export default {
  getTransactionsByWallet: async (req: Request, res: Response) => {
    try {
      const transactionsByWallet = await transactions.getByWalletAddress({
        address: req.params.address,
        first: 5,
      });
      return res.status(200).send(transactionsByWallet);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
