import {
  CodegenEthMainnetBalancesByWalletENSQueryVariables,
  CodegenEthMainnetBalancesByWalletENSQuery,
  CodegenTokenBalanceNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

// Using the generated CodegenEthMainnetBalancesByWalletENSQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type BalancesByWalletENSQuery = {
  [k in ChainName]: CodegenEthMainnetBalancesByWalletENSQuery['ethereum'];
};

// Using the generated CodegenEthMainnetBalancesByWalletENSQueryVariables as a base for the type here
// since the variables will be the same for each query
export type BalancesByWalletENSQueryVariables =
  CodegenEthMainnetBalancesByWalletENSQueryVariables;

export type BalancesByWalletENSInput =
  CodegenEthMainnetBalancesByWalletENSQueryVariables & NonQueryInput;

export interface BalancesByWalletENSQueryResultInfo {
  address: string;
  ensName: string;
  tokenBalancesPageInfo: CodegenPaginationFragment;
  tokenBalances: CodegenTokenBalanceNodeFragment[];
}

export interface BalancesByWalletENSQueryResultBody {
  walletByENS: BalancesByWalletENSQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type BalancesByWalletENSQueryResultFull = Record<
  ChainName,
  BalancesByWalletENSQueryResultBody
>;

// What we actually return to the user
export type BalancesByWalletENSResult = {
  address: string;
  ensName: string;
  results: CodegenTokenBalanceNodeFragment[];
  pageInfo: CodegenPaginationFragment;
};
