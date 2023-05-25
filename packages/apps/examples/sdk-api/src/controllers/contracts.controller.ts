import { Request, Response } from 'express';
import { contracts } from '../client';

export default {
  getContractDetails: async (req: Request, res: Response) => {
    try {
      const contractDetails = await contracts.getContractDetails({
        contractAddress: req.params.contractAddress,
      });
      return res.status(200).send(contractDetails);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
