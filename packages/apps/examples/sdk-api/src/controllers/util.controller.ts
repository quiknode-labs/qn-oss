import { Request, Response } from 'express';
import { utils } from '../client';

export default {
  getGasPrices: async (req: Request, res: Response) => {
    try {
      const gasPrices = await utils.getGasPrices({
        returnInGwei: true,
      });
      return res.status(200).send(gasPrices);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
