import {
  paginationParams,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetTrendingCollectionsQuery,
  CodegenEthMainnetTrendingCollectionsQueryVariables,
  CodegenTrendingCollectionInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { SimplifyType } from '../../../lib/types';
import { z } from 'zod';

export type NFTTrendingCollectionsQuery = {
  [k in ChainName]: CodegenEthMainnetTrendingCollectionsQuery['ethereum'];
};

export type NFTTrendingCollectionsQueryVariables =
  CodegenEthMainnetTrendingCollectionsQueryVariables;

export const nftTrendingCollectionsValidator = paginationParams
  .merge(supportedChainInput)
  .strict();

export type NFTTrendingCollectionsInput = z.infer<
  typeof nftTrendingCollectionsValidator
>;
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
export type NFTTrendingCollectionResult = SimplifyType<{
  results: CodegenTrendingCollectionInfoFragment[];
  pageInfo: CodegenPaginationFragment;
}>;
