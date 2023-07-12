import { type SimplifyType } from '../../../../lib/types';
import { z } from 'zod';
import {
  isEvmAddress,
  rpcPaginationParams,
} from '../../../../lib/validation/validators';

export const qnGetTransactionsByAddressInputSchema = z
  .object({
    address: isEvmAddress,
    fromBlock: z.number().positive().nullish(),
    toBlock: z.number().positive().nullish(),
  })
  .merge(rpcPaginationParams)
  .strict()
  .refine(
    ({ fromBlock, toBlock }) => {
      if (fromBlock && toBlock) return fromBlock < toBlock;
      return true;
    },
    { message: 'fromBlock must be less than toBlock' }
  );

export type QNGetTransactionsByAddressInput = z.infer<
  typeof qnGetTransactionsByAddressInputSchema
>;

interface RPCTransactionByAddress {
  blockTimestamp: string;
  transactionHash: string;
  blockNumber: string;
  transactionIndex: number;
  fromAddress: string;
  toAddress: string;
  contractAddress: string | null;
  value: string;
}

export type QNGetTransactionsByAddressResult = {
  paginatedItems: RPCTransactionByAddress[];
  totalItems: number;
  totalPages: number;
  pageNumber: number;
};

export type QNGetTransactionsByAddressMethod = {
  Method: 'qn_getTransactionsByAddress';
  Parameters: [QNGetTransactionsByAddressInput];
  ReturnType: SimplifyType<QNGetTransactionsByAddressResult>;
};
