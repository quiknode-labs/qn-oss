import {
  paginationParams,
  isENSAddress,
  isEvmAddress,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetBalancesByWalletAddressQueryVariables,
  CodegenEthMainnetBalancesByWalletAddressQuery,
  CodegenTokenBalanceNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

// Using the generated CodegenEthMainnetBalancesByWalletAddressQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type BalancesByWalletAddressQuery = {
  [k in ChainName]: CodegenEthMainnetBalancesByWalletAddressQuery['ethereum'];
};

// Using the generated CodegenEthMainnetBalancesByWalletAddressQueryVariables as a base for the type here
// since the variables will be the same for each query
export type BalancesByWalletAddressQueryVariables =
  CodegenEthMainnetBalancesByWalletAddressQueryVariables;

export const balancesByWalletAddressValidator = z
  .object({
    address: z.union([isENSAddress, isEvmAddress]),
  })
  .merge(paginationParams)
  .merge(supportedChainInput)
  .strict();

export type BalancesByWalletAddressInput = z.infer<
  typeof balancesByWalletAddressValidator
>;

export interface BalancesByWalletAddressQueryResultInfo {
  address: string;
  ensName: string;
  tokenBalancesPageInfo: CodegenPaginationFragment;
  tokenBalances: CodegenTokenBalanceNodeFragment[];
}

export interface BalancesByWalletAddressQueryResultBody {
  walletByAddress: BalancesByWalletAddressQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type BalancesByWalletAddressQueryResultFull = Record<
  ChainName,
  BalancesByWalletAddressQueryResultBody
>;

// What we actually return to the user
export type BalancesByWalletAddressResult = {
  address: string;
  ensName: string;
  results: CodegenTokenBalanceNodeFragment[];
  pageInfo: CodegenPaginationFragment;
};
