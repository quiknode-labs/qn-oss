import { useCustomQuery } from '../../utils/useCustomQuery';

import {
  collectionQuery,
  CollectionQuery,
  CollectionWithStatsQuery,
  CollectionQueryVariables,
} from './query';

interface WithStatsArgs {
  address: string;
  includeStats: true;
}

interface WithoutStatsArgs {
  address: string;
  includeStats?: false;
}

type Args = WithStatsArgs | WithoutStatsArgs;

function useCollection<T extends Args>(args: T) {
  const { data, loading } = useCustomQuery<
    T extends WithStatsArgs ? CollectionWithStatsQuery : CollectionQuery,
    CollectionQueryVariables
  >(collectionQuery, {
    variables: {
      ...args,
      includeStats: args.includeStats ?? false,
    },
  });

  return {
    loading,
    collection: data?.contract ?? null,
  };
}

export default useCollection;
