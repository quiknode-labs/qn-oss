import {
  CodegenNftInfoFragment,
  CodegenPaginationFragment,
} from '../graphql/generatedTypes';
import { ChainName } from './chains';

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
