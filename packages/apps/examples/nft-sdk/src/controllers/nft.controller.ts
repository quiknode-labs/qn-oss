import { QuickNodeSDK } from '@quicknode/sdk';
import { Request, Response } from 'express';

const client = new QuickNodeSDK();

//const getQueryParam = (req: Request, param: string): string | undefined => {
//  let typedParam = undefined;
//  if (typeof req.query?.[param] === 'string')
//    typedParam = String(req.query[param]);
//  return typedParam;
//};
//
//const getArrayQueryParam = (
//  req: Request,
//  param: string
//): string[] | undefined => {
//  function arrayOrUndefined(arr: any): undefined | string[] {
//    if (arr && !!arr.length && arr.every((el: any) => typeof el === 'string'))
//      return arr;
//
//    return undefined;
//  }
//  return arrayOrUndefined(req.query?.[param]);
//};

export default {
  getNFTsByEns: async (req: Request, res: Response) => {
    const NFTs = await client.nft.getNFTsByWalletENS({
      ensName: req.params.ensResource,
    });
    res.status(200).send(NFTs);
  },
};
