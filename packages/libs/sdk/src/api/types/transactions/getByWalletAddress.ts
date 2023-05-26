import {
  CodegenEthMainnetTransactionsByWalletAddressQueryVariables,
  CodegenEthMainnetTransactionsByWalletAddressQuery,
  CodegenTransactionsNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

// Using the generated CodegenEthMainnetTransactionsByWalletAddressQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type TransactionsByWalletAddressQueryType = {
  [k in ChainName]: CodegenEthMainnetTransactionsByWalletAddressQuery['ethereum'];
};

// Using the generated CodegenEthMainnetTransactionsByWalletAddressQueryVariables as a base for the type here
// since the variables will be the same for each query
export type TransactionsByWalletAddressQueryVariablesType =
  CodegenEthMainnetTransactionsByWalletAddressQueryVariables;

export interface TransactionsByWalletAddressQueryResultInfo {
  address: string;
  ensName: string;
  transactionsPageInfo: CodegenPaginationFragment;
  transactions: CodegenTransactionsNodeFragment[];
}

export interface TransactionsByWalletAddressQueryResultBody {
  walletByAddress: TransactionsByWalletAddressQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type TransactionsByWalletAddressQueryResultFull = Record<
  ChainName,
  TransactionsByWalletAddressQueryResultBody
>;

// What we actually return to the user
export type TransactionsByWalletAddressFormattedResult = {
  address: string;
  ensName: string;
  results: CodegenTransactionsNodeFragment[];
  pageInfo: CodegenPaginationFragment;
};
