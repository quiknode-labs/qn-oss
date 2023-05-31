import { Request, Response } from 'express';
import { transactions } from '../client';

export default {
  getTransactionsByWallet: async (req: Request, res: Response) => {
    try {
      const transactionsByWallet = await transactions.getByWallet({
        address: req.params.address,
        first: 5,
      });
      return res.status(200).send(transactionsByWallet);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getAllTransactions: async (req: Request, res: Response) => {
    try {
      const allTransactions = await transactions.getAll({
        filter: {
          blockNumber: {
            eq: parseInt(req.params.blockNumber),
          },
        },
        first: 5,
      });
      return res.status(200).send(allTransactions);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
