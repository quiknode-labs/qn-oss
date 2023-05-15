import {
  CodegenEthMainnetNftCollectionDetailsQuery,
  CodegenEthMainnetNftCollectionDetailsQueryVariables,
  CodegenNftCollectionInfoFragment,
} from '../../graphql/codegen/graphql';
import { ChainName } from '../chains';

export type NftCollectionDetailsQueryType = {
  [k in ChainName]: CodegenEthMainnetNftCollectionDetailsQuery['ethereum'];
};

export type NftCollectionDetailsQueryVariablesType =
  CodegenEthMainnetNftCollectionDetailsQueryVariables;

export interface NftCollectionDetailsQueryResultInfo {
  collection: CodegenNftCollectionInfoFragment['collection'];
}

// What the graphQL query returns after the edges and nodes are removed
export type NftCollectionDetailsQueryResultFull = Record<
  ChainName,
  NftCollectionDetailsQueryResultInfo
>;

// What we actually return to the user
export type NftCollectionDetailsFormattedResult = {
  collection: CodegenNftCollectionInfoFragment['collection'];
};
