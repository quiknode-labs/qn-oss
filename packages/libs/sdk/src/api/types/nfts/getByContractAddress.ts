import {
  paginationParams,
  supportedChainInput,
  isEvmAddress,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetWalletNFTsByContractAddressQuery,
  CodegenEthMainnetWalletNFTsByContractAddressQueryVariables,
  CodegenERC721NFTNodeFragment,
  CodegenERC1155NFTNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NftErcStandards } from '../nfts';
import { z } from 'zod';

export type NFTsByContractAddressQuery = {
  [k in ChainName]: CodegenEthMainnetWalletNFTsByContractAddressQuery['ethereum'];
};

export type NFTsByContractAddressQueryVariables =
  CodegenEthMainnetWalletNFTsByContractAddressQueryVariables;

export const nftsByContractAddressValidator = z
  .object({ contractAddress: isEvmAddress })
  .merge(paginationParams)
  .merge(supportedChainInput)
  .strict();

export type NFTsByContractAddressInput = z.infer<
  typeof nftsByContractAddressValidator
>;
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
