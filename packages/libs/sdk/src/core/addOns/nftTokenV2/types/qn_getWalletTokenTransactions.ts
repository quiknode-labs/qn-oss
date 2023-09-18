import { type SimplifyType } from '../../../../lib/types';
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
  blockNumber: string;
  transactionHash: string;
  toAddress: string;
  fromAddress: string;
  logIndex: number;
  type: string;
  timestamp: string;
  receivedTokenContractAddress: string | null;
  sentTokenContractAddress: string | null;
  sentAmount: string;
  receivedAmount: string;
  decimalSentAmount: string;
  decimalReceivedAmount: string;
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
