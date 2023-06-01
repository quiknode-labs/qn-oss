import {
  CodegenEthMainnetTransactionsByHashQueryVariables,
  CodegenEthMainnetTransactionsByHashQuery,
  CodegenTransactionsNodeFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

// Using the generated CodegenEthMainnetTransactionsByHashQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type TransactionsByHashQueryType = {
  [k in ChainName]: CodegenEthMainnetTransactionsByHashQuery['ethereum'];
};

// Using the generated CodegenEthMainnetTransactionsByHashQueryVariables as a base for the type here
// since the variables will be the same for each query
export type TransactionsByHashQueryVariablesType =
  CodegenEthMainnetTransactionsByHashQueryVariables;

export interface TransactionsByHashQueryResultBody {
  transaction: CodegenTransactionsNodeFragment;
}

export type TransactionsByHashQueryResultFull = Record<
  ChainName,
  TransactionsByHashQueryResultBody
>;

export type TransactionsByHashFormattedResult = {
  transaction: CodegenTransactionsNodeFragment | null;
};
