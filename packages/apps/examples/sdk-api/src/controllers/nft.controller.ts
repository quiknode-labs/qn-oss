import { Request, Response } from 'express';
import { nfts, api, apiPolygon } from '../client';

export default {
  getNFTsByWallet: async (req: Request, res: Response) => {
    try {
      const NFTs = await nfts.getByWallet({
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
  verifyOwnershipByAddress: async (req: Request, res: Response) => {
    try {
      const verifyOwnership = await nfts.verifyOwnership({
        address: req.params.walletAddress,
        nfts: [
          {
            contractAddress: req.params.contractAddress,
          },
        ],
      });
      return res.status(200).send(verifyOwnership);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },

  twoChainQuery: async (req: Request, res: Response) => {
    function fetchNFTs(
      qn: any,
      chain: any,
      address: any,
      contractAddress: any
    ) {
      console.log(`Querying NFTs from ${chain.toUpperCase()}...`);
      return qn.nfts.getByWallet({
        address: address,
        first: 5,
        filter: {
          contractTokens: [{ contractAddress: contractAddress }],
        },
      });
    }

    async function getNFTsByWallet() {
      try {
        // Define addresses and contract addresses for each chain
        const polygonAddress = '0xA23FcB4645cc618549Da1b61b8564429C2C32Ff9';
        const polygonContract = '0xaa8c6b9d67149439680b67ce395c4ac2d233b6de';
        const ethereumAddress = '0x01cFd327D29d9C6a07b7613494797A67E89570a0';
        const ethereumContract = '0xd77e17ecc3942b6e83f67c56999c5230c70a85a4';

        const polygonResults = await fetchNFTs(
          apiPolygon,
          'polygon',
          polygonAddress,
          polygonContract
        );
        const ethereumResults = await fetchNFTs(
          api,
          'ethereum',
          ethereumAddress,
          ethereumContract
        );

        console.log('Polygon Results:', polygonResults.results);
        console.log('Ethereum Results:', ethereumResults.results);
        return res.status(200).send({});
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    getNFTsByWallet();
  },
};
