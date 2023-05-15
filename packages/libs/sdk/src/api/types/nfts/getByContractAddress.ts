import {
  CodegenEthMainnetWalletNFTsByContractAddressQuery,
  CodegenEthMainnetWalletNFTsByContractAddressQueryVariables,
  CodegenERC721NFTNodeFragment,
  CodegenERC1155NFTNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/codegen/graphql';
import { ChainName } from '../chains';
import { NftErcStandards } from '../nfts';

export type NFTsByContractAddressQueryType = {
  [k in ChainName]: CodegenEthMainnetWalletNFTsByContractAddressQuery['ethereum'];
};

export type NFTsByContractAddressQueryVariablesType =
  CodegenEthMainnetWalletNFTsByContractAddressQueryVariables;

export interface NFTsByContractAddressQueryResultInfo {
  __typename: string;
  nftsPageInfo: CodegenPaginationFragment;
  nfts: [CodegenERC721NFTNodeFragment | CodegenERC1155NFTNodeFragment][];
}

export interface NFTsByContractAddressQueryResultBody {
  collection: NFTsByContractAddressQueryResultInfo;
}

export type NFTsByContractAddressQueryResultFull = Record<
  ChainName,
  NFTsByContractAddressQueryResultBody
>;

export type NFTsByContractAddressFormattedResult = {
  standard: NftErcStandards | null;
  results: [CodegenERC721NFTNodeFragment | CodegenERC1155NFTNodeFragment][];
  pageInfo: CodegenPaginationFragment;
};
