import { Request, Response } from 'express';
import { events } from '../client';

export default {
  getEventsByContract: async (req: Request, res: Response) => {
    try {
      const eventsByContract = await events.getByContract({
        contractAddress: req.params.contractAddress,
      });
      return res.status(200).send(eventsByContract);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
