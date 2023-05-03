import {
  CodegenEthMainnetNFTDetailsQueryVariables,
  CodegenEthMainnetNFTDetailsQuery,
  CodegenNftDetailsFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type NFTDetailsQueryType = {
  [k in ChainName]: CodegenEthMainnetNFTDetailsQuery['ethereum'];
};

export type NFTDetailsQueryVariablesType =
  CodegenEthMainnetNFTDetailsQueryVariables;

export interface NFTDetailsQueryResultInfo {
  nft: CodegenNftDetailsFragment['nft'];
}

// What the graphQL query returns after the edges and nodes are removed
export type NFTDetailsQueryResultFull = Record<
  ChainName,
  NFTDetailsQueryResultInfo
>;

export type NFTDetailsFormattedResult = {
  nft: CodegenNftDetailsFragment['nft'];
};
