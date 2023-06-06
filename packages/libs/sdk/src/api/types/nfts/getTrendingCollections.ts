import {
  CodegenEthMainnetTrendingCollectionsQuery,
  CodegenEthMainnetTrendingCollectionsQueryVariables,
  CodegenTrendingCollectionInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type NFTTrendingCollectionsQuery = {
  [k in ChainName]: CodegenEthMainnetTrendingCollectionsQuery['ethereum'];
};

export type NFTTrendingCollectionsQueryVariables =
  CodegenEthMainnetTrendingCollectionsQueryVariables;

export type NFTTrendingCollectionsInput = NFTTrendingCollectionsQueryVariables &
  NonQueryInput;

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
export type NFTTrendingCollectionResult = {
  results: CodegenTrendingCollectionInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
