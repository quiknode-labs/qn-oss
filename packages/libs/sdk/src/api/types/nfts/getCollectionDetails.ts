import {
  CodegenEthMainnetNftCollectionDetailsQuery,
  CodegenEthMainnetNftCollectionDetailsQueryVariables,
  CodegenNftCollectionInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type NftCollectionDetailsQuery = {
  [k in ChainName]: CodegenEthMainnetNftCollectionDetailsQuery['ethereum'];
};

export type NftCollectionDetailsQueryVariables =
  CodegenEthMainnetNftCollectionDetailsQueryVariables;

export type NftCollectionDetailsInput = NftCollectionDetailsQueryVariables &
  NonQueryInput;

export interface NftCollectionDetailsQueryResultInfo {
  collection: CodegenNftCollectionInfoFragment['collection'];
}

// What the graphQL query returns after the edges and nodes are removed
export type NftCollectionDetailsQueryResultFull = Record<
  ChainName,
  NftCollectionDetailsQueryResultInfo
>;

// What we actually return to the user
export type NftCollectionDetailsResult = {
  collection: CodegenNftCollectionInfoFragment['collection'];
};
