import { Request, Response } from 'express';
import { events } from '../client';

export default {
  getContractEvents: async (req: Request, res: Response) => {
    try {
      events.getByNftCollection();
      return res.status(200).send({});
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
