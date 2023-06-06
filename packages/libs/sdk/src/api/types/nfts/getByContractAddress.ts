import {
  CodegenEthMainnetWalletNFTsByContractAddressQuery,
  CodegenEthMainnetWalletNFTsByContractAddressQueryVariables,
  CodegenERC721NFTNodeFragment,
  CodegenERC1155NFTNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';
import { NftErcStandards } from '../nfts';

export type NFTsByContractAddressQuery = {
  [k in ChainName]: CodegenEthMainnetWalletNFTsByContractAddressQuery['ethereum'];
};

export type NFTsByContractAddressQueryVariables =
  CodegenEthMainnetWalletNFTsByContractAddressQueryVariables;

export type NFTsByContractAddressInput = NFTsByContractAddressQueryVariables &
  NonQueryInput;

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

export type NFTsByContractAddressResult = {
  standard: NftErcStandards | null;
  results: [CodegenERC721NFTNodeFragment | CodegenERC1155NFTNodeFragment][];
  pageInfo: CodegenPaginationFragment;
};
