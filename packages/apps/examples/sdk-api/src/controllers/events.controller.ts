import { Request, Response } from 'express';
import { events } from '../client';

export default {
  getEventsByContract: async (req: Request, res: Response) => {
    try {
      const eventsByContract = await events.getByContract({
        contractAddress: req.params.contractAddress,
        filter: {
          type: {
            eq: 'TRANSFER',
          },
          marketplace: {
            eq: 'OPENSEA',
          },
        },
      });
      return res.status(200).send(eventsByContract);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
  getCollectionEvents: async (req: Request, res: Response) => {
    try {
      const collectionEvents = await events.getByNFTCollection({
        contractAddress: req.params.contractAddress,
        first: 5,
      });
      return res.status(200).send(collectionEvents);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getNFTEvents: async (req: Request, res: Response) => {
    try {
      const NFTEvents = await events.getByNFT({
        contractAddress: req.params.contractAddress,
        tokenId: req.params.tokenId,
        first: 5,
      });
      return res.status(200).send(NFTEvents);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
