import { type SimplifyType } from '../../../../../src/api/utils/helpers';
import { z } from 'zod';
import {
  isEvmAddress,
  rpcPaginationParams,
} from '../../../../lib/validation/validators';

export const qnGetWalletTokenTransactionsInputSchema = z
  .object({
    address: isEvmAddress,
    contract: isEvmAddress,
    fromBlock: z.number().positive().nullish(),
    toBlock: z.number().positive().nullish(),
  })
  .merge(rpcPaginationParams)
  .strict();

export type QNGetWalletTokenTransactionsInput = z.infer<
  typeof qnGetWalletTokenTransactionsInputSchema
>;

export type RPCFullTokenMetadata = {
  address: string;
  genesisBlock: string | null;
  genesisTransaction: string | null;
  name: string | null;
  symbol: string | null;
  decimals: string | null;
  contractAddress: string;
};

export type RPCTokenTransaction = {
  name: string | null;
  symbol: string | null;
  decimals: string | null;
  address: string;
  quantityIn: string;
  quantityOut: string;
  blockNumber: string;
  transactionHash: string;
  timestamp: string;
  totalBalance: string;
};

export type QNGetWalletTokenTransactionsResult = {
  paginatedItems: RPCTokenTransaction[];
  totalItems: number;
  totalPages: number;
  pageNumber: number;
  token: RPCFullTokenMetadata;
};

export type QNGetWalletTokenTransactionsMethod = {
  Method: 'qn_getWalletTokenTransactions';
  Parameters: [QNGetWalletTokenTransactionsInput];
  ReturnType: SimplifyType<QNGetWalletTokenTransactionsResult>;
};
