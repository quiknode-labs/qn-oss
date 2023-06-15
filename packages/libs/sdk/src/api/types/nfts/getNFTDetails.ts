import { isEvmAddress, supportedChainInput } from 'lib/validation/validators';
import {
  CodegenEthMainnetNFTDetailsQueryVariables,
  CodegenEthMainnetNFTDetailsQuery,
  CodegenNftDetailsFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

export type NFTDetailsQuery = {
  [k in ChainName]: CodegenEthMainnetNFTDetailsQuery['ethereum'];
};

export type NFTDetailsQueryVariables =
  CodegenEthMainnetNFTDetailsQueryVariables;

export const nftDetailsValidator = z
  .object({ contractAddress: isEvmAddress, tokenId: z.string() })
  .merge(supportedChainInput)
  .strict();

export type NFTDetailsInput = z.infer<typeof nftDetailsValidator>;

export interface NFTDetailsQueryResultInfo {
  nft: CodegenNftDetailsFragment['nft'];
}

// What the graphQL query returns after the edges and nodes are removed
export type NFTDetailsQueryResultFull = Record<
  ChainName,
  NFTDetailsQueryResultInfo
>;

export type NFTDetailsResult = {
  nft: CodegenNftDetailsFragment['nft'];
};
