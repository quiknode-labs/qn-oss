import {
  CodegenEthMainnetWalletNFTsByEnsQueryVariables,
  CodegenEthMainnetWalletNFTsByEnsQuery,
  CodegenNftInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

// Using the generated CodegenEthMainnetWalletNFTsByEnsQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type WalletNFTsByEnsQueryType = {
  [k in ChainName]: CodegenEthMainnetWalletNFTsByEnsQuery['ethereum'];
};

// Using the generated CodegenEthMainnetWalletNFTsByEnsQueryVariables as a base for the type here
// since the variables will be the same for each query
export type WalletNFTsByEnsQueryVariablesType =
  CodegenEthMainnetWalletNFTsByEnsQueryVariables;

export interface WalletByEnsQueryResultInfo {
  address: string;
  ensName: string;
  walletNFTsPageInfo: CodegenPaginationFragment;
  walletNFTs: CodegenNftInfoFragment[];
}
export interface WalletByEnsQueryResultBody {
  walletByENS: WalletByEnsQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type WalletNFTByEnsQueryResultFull = Record<
  ChainName,
  WalletByEnsQueryResultBody
>;

// What we actually return to the user
export type WalletNFTsByEnsFormattedResult = {
  address: string;
  ensName: string;
  results: CodegenNftInfoFragment['nft'][];
  pageInfo: CodegenPaginationFragment;
};
