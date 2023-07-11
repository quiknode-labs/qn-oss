import { z } from 'zod';
import { type SimplifyType } from '../../../../lib/types';
import {
  isEvmAddress,
  rpcPaginationParams,
} from '../../../../lib/validation/validators';
import { RpcNftAsset } from './shared';

export const qnFetchNFTsByCollectionInputSchema = z
  .object({
    collection: isEvmAddress,
    tokens: z.array(z.string()).nullish(),
    omitFields: z.array(z.string()).nullish(),
  })
  .merge(rpcPaginationParams)
  .strict();

export type QNFetchNFTsByCollectionInput = z.infer<
  typeof qnFetchNFTsByCollectionInputSchema
>;

export type QNFetchNFTsByCollectionResult = {
  collection: string;
  tokens: RpcNftAsset[];
};

export type QNFetchNFTsByCollectionMethod = {
  Method: 'qn_fetchNFTsByCollection';
  Parameters: [QNFetchNFTsByCollectionInput];
  ReturnType: SimplifyType<QNFetchNFTsByCollectionResult>;
};
