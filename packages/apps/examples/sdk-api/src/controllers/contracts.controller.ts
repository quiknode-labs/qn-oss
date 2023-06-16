import { Request, Response } from 'express';
import { contracts } from '../client';
import { QNInputValidationError } from '@qn-oss/libs/sdk';

export default {
  getContractDetails: async (req: Request, res: Response) => {
    try {
      const contractDetails = await contracts.getDetails({
        contractAddress: req.params.contractAddress,
      });
      return res.status(200).send(contractDetails);
    } catch (error: unknown) {
      if (error instanceof QNInputValidationError) {
        console.error(error.stack);
        return res.status(401).send({ errors: error.issues });
      } else {
        console.error(error);
        return res.status(500).send('Something went wrong!');
      }
    }
  },
};
