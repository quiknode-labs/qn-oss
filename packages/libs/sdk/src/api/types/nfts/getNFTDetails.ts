import {
  CodegenEthMainnetNFTDetailsQueryVariables,
  CodegenEthMainnetNFTDetailsQuery,
  CodegenNftDetailsFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type NFTDetailsQuery = {
  [k in ChainName]: CodegenEthMainnetNFTDetailsQuery['ethereum'];
};

export type NFTDetailsQueryVariables =
  CodegenEthMainnetNFTDetailsQueryVariables;

export type NFTDetailsInput = NFTDetailsQueryVariables & NonQueryInput;

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
