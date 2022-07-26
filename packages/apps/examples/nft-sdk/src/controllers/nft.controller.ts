import { QuickNodeSDK } from '@quicknode/sdk';
import { Request, Response } from 'express';

const client = new QuickNodeSDK();

const getQueryParam = (req: Request, param: string): string | undefined => {
  let typedParam = undefined;
  if (typeof req.query?.[param] === 'string')
    typedParam = String(req.query[param]);
  return typedParam;
};

const getArrayQueryParam = (
  req: Request,
  param: string
): string[] | undefined => {
  function arrayOrUndefined(arr: any): undefined | string[] {
    if (arr && !!arr.length && arr.every((el: any) => typeof el === 'string'))
      return arr;

    return undefined;
  }
  return arrayOrUndefined(req.query?.[param]);
};

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    const NFTs = await client.nft.getNFTsByWalletENS({
      ensName: req.params.ensResource,
      first: 5,
      after: getQueryParam(req, 'after'),
    });
    res.status(200).send(NFTs);
  },

  getNFTsByContractAddress: async (req: Request, res: Response) => {
    const NFTs = await client.nft.getNFTsByContractAddress({
      address: req.params.address,
      first: 5,
      after: getQueryParam(req, 'after'),
    });
    res.status(200).send(NFTs);
  },

  getNFTsByWalletAddress: async (req: Request, res: Response) => {
    const NFTs = await client.nft.getNFTsByWalletAddress({
      address: req.params.walletAddress,
      first: 5,
      after: getQueryParam(req, 'after'),
    });
    res.status(200).send(NFTs);
  },

  getCollectionDetails: async (req: Request, res: Response) => {
    const details = await client.nft.getCollectionDetails({
      address: req.params.address,
    });
    res.status(200).send(details);
  },

  getNFTEventLogs: async (req: Request, res: Response) => {
    const events = await client.nft.getNFTEventLogs({
      address: req.params.address,
      tokenId: req.params.tokenId,
      first: 2,
      after: getQueryParam(req, 'after'),
    });
    res.status(200).send(events);
  },

  getNFTDetails: async (req: Request, res: Response) => {
    const details = await client.nft.getNFTDetails({
      contractAddress: req.params.address,
      tokenId: req.params.tokenId,
    });
    res.status(200).send(details);
  },

  getContractEventLogs: async (req: Request, res: Response) => {
    const details = await client.nft.getContractEventLogs({
      address: req.params.address,
      first: 2,
      after: getQueryParam(req, 'after'),
    });
    res.status(200).send(details);
  },

  getNFTsByWalletAndContracts: async (req: Request, res: Response) => {
    const details = await client.nft.getNFTsByWalletAndContracts({
      address: req.params.address,
      contracts: getArrayQueryParam(req, 'contracts') || [],
      first: 2,
      after: getQueryParam(req, 'after'),
    });
    res.status(200).send(details);
  },

  getTrendingNFTCollections: async (req: Request, res: Response) => {
    const nftCollections = await client.nft.getTrendingNFTCollections({
      after: getQueryParam(req, 'after'),
      first: 2,
    });
    res.status(200).send(nftCollections);
  },
};
