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
  .strict();

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
};

export type QNGetTransactionsByAddressMethod = {
  Method: 'qn_getTransactionsByAddress';
  Parameters: [QNGetTransactionsByAddressInput];
  ReturnType: SimplifyType<QNGetTransactionsByAddressResult>;
};
