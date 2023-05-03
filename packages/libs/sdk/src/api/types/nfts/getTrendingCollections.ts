import {
  CodegenEthMainnetTrendingCollectionsQuery,
  CodegenEthMainnetTrendingCollectionsQueryVariables,
  CodegenTrendingCollectionInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type NFTTrendingCollectionsQueryType = {
  [k in ChainName]: CodegenEthMainnetTrendingCollectionsQuery['ethereum'];
};

export type NFTTrendingCollectionsQueryVariablesType =
  CodegenEthMainnetTrendingCollectionsQueryVariables;

export interface NFTTrendingCollectionsQueryResultBody {
  trendingCollectionsPageInfo: CodegenPaginationFragment;
  trendingCollections: CodegenTrendingCollectionInfoFragment[];
}

// What the graphQL query returns after the edges and nodes are removed
export type NFTTrendingCollectionsQueryResultFull = Record<
  ChainName,
  NFTTrendingCollectionsQueryResultBody
>;

// What we actually return to the user
export type NFTTrendingCollectionFormattedResult = {
  results: CodegenTrendingCollectionInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
