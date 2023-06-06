import {
  CodegenEthMainnetWalletNFTsByEnsQueryVariables,
  CodegenEthMainnetWalletNFTsByEnsQuery,
  CodegenWalletNFTNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

// Using the generated CodegenEthMainnetWalletNFTsByEnsQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type WalletNFTsByEnsQuery = {
  [k in ChainName]: CodegenEthMainnetWalletNFTsByEnsQuery['ethereum'];
};

// Using the generated CodegenEthMainnetWalletNFTsByEnsQueryVariables as a base for the type here
// since the variables will be the same for each query
export type WalletNFTsByEnsQueryVariables =
  CodegenEthMainnetWalletNFTsByEnsQueryVariables;

export type WalletNFTsByENSInput = WalletNFTsByEnsQueryVariables &
  NonQueryInput;

export interface WalletNFTsByEnsQueryResultInfo {
  address: string;
  ensName: string;
  walletNFTsPageInfo: CodegenPaginationFragment;
  walletNFTs: CodegenWalletNFTNodeFragment[];
}
export interface WalletNFTsByEnsQueryResultBody {
  walletByENS: WalletNFTsByEnsQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type WalletNFTsByEnsQueryResultFull = Record<
  ChainName,
  WalletNFTsByEnsQueryResultBody
>;

// What we actually return to the user
export type WalletNFTsByEnsResult = {
  address: string;
  ensName: string;
  results: CodegenWalletNFTNodeFragment['nft'][];
  pageInfo: CodegenPaginationFragment;
};
