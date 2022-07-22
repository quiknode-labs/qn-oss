import { useQuery } from '@apollo/client';

import {
  trendingCollectionsQuery,
  TrendingCollectionsQuery,
  TrendingCollectionsQueryVariables,
  TrendingCollectionsTimePeriod,
} from './query';

type Args = TrendingCollectionsQueryVariables;

function useTrendingCollections(args: Args) {
  const { data, loading } = useQuery<
    TrendingCollectionsQuery,
    TrendingCollectionsQueryVariables
  >(trendingCollectionsQuery, {
    variables: args,
  });

  const collections = (data?.trendingCollections?.edges ?? []).map((e) => e.node);

  return {
    loading,
    collections,
    pageInfo: data?.trendingCollections.pageInfo,
  };
}

export { TrendingCollectionsTimePeriod };

export default useTrendingCollections;
