import { Request, Response } from 'express';
import { nfts } from '../client';

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    try {
      const NFTs = await nfts.getByWalletENS({
        ensName: req.params.ensResource,
        first: 2,
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getNFTsByAddress: async (req: Request, res: Response) => {
    try {
      const NFTs = await nfts.getByWalletAddress({
        address: req.params.address,
        first: 5,
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getNFTDetails: async (req: Request, res: Response) => {
    try {
      const NFT = await nfts.getNFTDetails({
        contractAddress: req.params.contractAddress,
        tokenId: req.params.tokenId,
      });
      return res.status(200).send(NFT);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getNFTsByContractAddress: async (req: Request, res: Response) => {
    try {
      const NFTs = await nfts.getByContractAddress({
        contractAddress: req.params.contractAddress,
      });
      return res.status(200).send(NFTs);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getTrendingCollections: async (req: Request, res: Response) => {
    try {
      const trendingCollections = await nfts.getTrendingCollections({
        first: 5,
      });
      return res.status(200).send(trendingCollections);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  getCollectionDetails: async (req: Request, res: Response) => {
    try {
      const collectionDetails = await nfts.getCollectionDetails({
        contractAddress: req.params.contractAddress,
      });
      return res.status(200).send(collectionDetails);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
