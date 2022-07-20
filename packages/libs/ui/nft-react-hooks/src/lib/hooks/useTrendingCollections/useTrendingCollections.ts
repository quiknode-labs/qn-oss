import { useQuery } from '@apollo/client';

import {
  trendingCollectionsQuery,
  TrendingCollectionsQuery,
  TrendingCollectionsQueryVariables,
} from './query';

type Args = TrendingCollectionsQueryVariables;

function useTrendingCollections(args: Args) {
  const { data, loading } = useQuery<
    TrendingCollectionsQuery,
    TrendingCollectionsQueryVariables
  >(trendingCollectionsQuery, {
    variables: args,
  });

  const collections = (data?.contracts?.edges ?? []).map((e) => e.node);

  return {
    loading,
    collections,
  };
}

export default useTrendingCollections;
