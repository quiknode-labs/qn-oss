import {
  CodegenEthMainnetBalancesByWalletAddressQueryVariables,
  CodegenEthMainnetBalancesByWalletAddressQuery,
  CodegenTokenBalanceNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

// Using the generated CodegenEthMainnetBalancesByWalletAddressQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type BalancesByWalletAddressQueryType = {
  [k in ChainName]: CodegenEthMainnetBalancesByWalletAddressQuery['ethereum'];
};

// Using the generated CodegenEthMainnetBalancesByWalletAddressQueryVariables as a base for the type here
// since the variables will be the same for each query
export type BalancesByWalletAddressQueryVariablesType =
  CodegenEthMainnetBalancesByWalletAddressQueryVariables;

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
export type BalancesByWalletAddressFormattedResult = {
  address: string;
  ensName: string;
  results: CodegenTokenBalanceNodeFragment[];
  pageInfo: CodegenPaginationFragment;
};
