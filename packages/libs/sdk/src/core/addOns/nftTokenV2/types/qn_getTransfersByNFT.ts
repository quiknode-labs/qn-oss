import { z } from 'zod';
import { type SimplifyType } from '../../../../lib/types';
import {
  isEvmAddress,
  rpcPaginationParams,
} from '../../../../lib/validation/validators';

export const qnGetTransfersByNFTInputSchema = z
  .object({
    collection: isEvmAddress,
    collectionTokenId: z.string(),
  })
  .merge(rpcPaginationParams)
  .strict();

export type QNGetTransfersByNFTInput = z.infer<
  typeof qnGetTransfersByNFTInputSchema
>;

type TransfersByNFTTransfer = {
  blockNumber: number;
  date: string;
  from: string;
  to: string;
  txHash: string;
};

export type QNGetTransfersByNFTResult = {
  collection: string;
  transfers: TransfersByNFTTransfer[];
  totalPages: number;
  pageNumber: number;
  totalItems: number;
};

export type QNGetTransfersByNFTMethod = {
  Method: 'qn_getTransfersByNFT';
  Parameters: [QNGetTransfersByNFTInput];
  ReturnType: SimplifyType<QNGetTransfersByNFTResult>;
};
