import { z } from 'zod';
import { type SimplifyType } from '../../../../lib/types';
import {
  isEvmAddress,
  rpcPaginationParams,
} from '../../../../lib/validation/validators';
import { RpcNftAsset } from './shared';

export const qnFetchNFTInputSchema = z
  .object({
    wallet: isEvmAddress,
    contracts: z.array(isEvmAddress).nullish(),
    omitFields: z.array(z.string()).nullish(),
  })
  .merge(rpcPaginationParams)
  .strict();

export type QNFetchNFTInput = z.infer<typeof qnFetchNFTInputSchema>;

export type QNFetchNFTResult = {
  owner: string;
  assets: RpcNftAsset[];
  totalPages: number;
  totalItems: number;
  pageNumber: number;
};

export type QNFetchNFTMethod = {
  Method: 'qn_fetchNFTs';
  Parameters: [QNFetchNFTInput];
  ReturnType: SimplifyType<QNFetchNFTResult>;
};
