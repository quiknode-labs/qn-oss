import { Request, Response } from 'express';
import { events } from '../client';
import { QNInputValidationError } from '@qn-oss/libs/sdk';

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
          transactionHash: {
            eq: '0x0',
          },
        },
      });
      return res.status(200).send(eventsByContract);
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

  getAllEvents: async (req: Request, res: Response) => {
    try {
      const allEvents = await events.getAll({
        filter: {
          blockNumber: {
            eq: parseInt(req.params.blockNumber),
          },
        },
      });
      return res.status(200).send(allEvents);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
