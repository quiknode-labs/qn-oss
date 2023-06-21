import {
  baseTransactionsInput,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetTransactionsBySearchQueryVariables,
  CodegenEthMainnetTransactionsBySearchQuery,
  CodegenTransactionsNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { SimplifyType } from '../../utils/helpers';
import { z } from 'zod';

// Using the generated CodegenEthMainnetTransactionsBySearchQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type TransactionsBySearchQuery = {
  [k in ChainName]: CodegenEthMainnetTransactionsBySearchQuery['ethereum'];
};

// Using the generated CodegenEthMainnetTransactionsBySearchQueryVariables as a base for the type here
// since the variables will be the same for each query
export type TransactionsBySearchQueryVariables =
  CodegenEthMainnetTransactionsBySearchQueryVariables;

export const transactionsBySearchValidator = baseTransactionsInput
  .merge(supportedChainInput)
  .strict();

export type TransactionsBySearchInput = z.infer<
  typeof transactionsBySearchValidator
>;

export interface TransactionsBySearchQueryResultInfo {
  transactionsPageInfo: CodegenPaginationFragment;
  transactions: CodegenTransactionsNodeFragment[];
}

export interface TransactionsBySearchQueryResultBody {
  transactionsBySearch: TransactionsBySearchQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type TransactionsBySearchQueryResultFull = Record<
  ChainName,
  TransactionsBySearchQueryResultBody
>;

// What we actually return to the user
export type TransactionsBySearchResult = SimplifyType<{
  results: CodegenTransactionsNodeFragment[];
  pageInfo: CodegenPaginationFragment;
}>;
