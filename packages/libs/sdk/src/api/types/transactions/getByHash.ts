import {
  isEvmTransactionHash,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetTransactionsByHashQueryVariables,
  CodegenEthMainnetTransactionsByHashQuery,
  CodegenTransactionsNodeFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { SimplifyType } from '../../utils/helpers';
import { z } from 'zod';

// Using the generated CodegenEthMainnetTransactionsByHashQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type TransactionsByHashQuery = {
  [k in ChainName]: CodegenEthMainnetTransactionsByHashQuery['ethereum'];
};

// Using the generated CodegenEthMainnetTransactionsByHashQueryVariables as a base for the type here
// since the variables will be the same for each query
export type TransactionsByHashQueryVariables =
  CodegenEthMainnetTransactionsByHashQueryVariables;

export const transactionsByHashValidator = z
  .object({
    hash: isEvmTransactionHash,
  })
  .merge(supportedChainInput)
  .strict();

export type TransactionsByHashInput = z.infer<
  typeof transactionsByHashValidator
>;
export interface TransactionsByHashQueryResultBody {
  transaction: CodegenTransactionsNodeFragment;
}

export type TransactionsByHashQueryResultFull = Record<
  ChainName,
  TransactionsByHashQueryResultBody
>;

export type TransactionsByHashResult = SimplifyType<{
  transaction: CodegenTransactionsNodeFragment | null;
}>;
