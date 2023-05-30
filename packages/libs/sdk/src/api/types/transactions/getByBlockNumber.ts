import {
  CodegenEthMainnetTransactionsByBlockNumberQueryVariables,
  CodegenEthMainnetTransactionsByBlockNumberQuery,
  CodegenTransactionsNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

// Using the generated CodegenEthMainnetTransactionsByBlockNumberQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type TransactionsByBlockNumberQueryType = {
  [k in ChainName]: CodegenEthMainnetTransactionsByBlockNumberQuery['ethereum'];
};

// Using the generated CodegenEthMainnetTransactionsByBlockNumberQueryVariables as a base for the type here
// since the variables will be the same for each query
export type TransactionsByBlockNumberQueryVariablesType =
  CodegenEthMainnetTransactionsByBlockNumberQueryVariables;

export interface TransactionsByBlockNumberQueryResultInfo {
  transactionsPageInfo: CodegenPaginationFragment;
  transactions: CodegenTransactionsNodeFragment[];
}

export interface TransactionsByBlockNumberQueryResultBody {
  transactionsByBlockNumber: TransactionsByBlockNumberQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type TransactionsByBlockNumberQueryResultFull = Record<
  ChainName,
  TransactionsByBlockNumberQueryResultBody
>;

// What we actually return to the user
export type TransactionsByBlockNumberFormattedResult = {
  results: CodegenTransactionsNodeFragment[];
  pageInfo: CodegenPaginationFragment;
};
