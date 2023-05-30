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

  getTransactionsByBlockNumber: async (req: Request, res: Response) => {
    try {
      const transactionsByBlockNumber = await transactions.search({
        filter: {
          blockNumber: {
            eq: parseInt(req.params.blockNumber),
          },
        },
        first: 5,
      });
      return res.status(200).send(transactionsByBlockNumber);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
