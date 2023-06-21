import {
  isENSAddress,
  isEvmAddress,
  paginationParams,
  supportedChainInput,
  contractTokensFilter,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetWalletNFTsByAddressQueryVariables,
  CodegenEthMainnetWalletNFTsByAddressQuery,
  CodegenWalletNFTNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

// Using the generated CodegenEthMainnetWalletNFTsByAddressQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type WalletNFTsByAddressQuery = {
  [k in ChainName]: CodegenEthMainnetWalletNFTsByAddressQuery['ethereum'];
};

// Using the generated CodegenEthMainnetWalletNFTsByAddressQueryVariables as a base for the type here
// since the variables will be the same for each query
export type WalletNFTsByAddressQueryVariables =
  CodegenEthMainnetWalletNFTsByAddressQueryVariables;

export const walletByAddressValidator = z
  .object({
    address: z.union([isENSAddress, isEvmAddress]),
    filter: z
      .object({
        contractTokens: contractTokensFilter,
      })
      .strict()
      .optional(),
  })
  .merge(paginationParams)
  .merge(supportedChainInput)
  .strict();

export type WalletNFTsByAddressInput = z.infer<typeof walletByAddressValidator>;

export interface WalletNFTsByAddressQueryResultInfo {
  address: string;
  ensName: string;
  walletNFTsPageInfo: CodegenPaginationFragment;
  walletNFTs: CodegenWalletNFTNodeFragment[];
}
export interface WalletNFTsByAddressQueryResultBody {
  walletByAddress: WalletNFTsByAddressQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type WalletNFTByAddressQueryResultFull = Record<
  ChainName,
  WalletNFTsByAddressQueryResultBody
>;

// What we actually return to the user
export type WalletNFTsByAddressResult = {
  address: string;
  ensName: string;
  results: CodegenWalletNFTNodeFragment['nft'][];
  pageInfo: CodegenPaginationFragment;
};
