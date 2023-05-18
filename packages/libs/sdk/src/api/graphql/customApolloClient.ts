import {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from '@apollo/client';
import {
  removeNodesAndEdges,
  ResultOutput,
} from '../utils/removeNodesAndEdges';

interface InternalOptions {
  keepTypename?: boolean;
}

export class CustomApolloClient {
  constructor(public apolloClient: ApolloClient<NormalizedCacheObject>) {}

  async query<
    TVariables extends OperationVariables,
    KResults extends Record<string, any>,
    KResultsOutput extends ResultOutput
  >(options: QueryOptions<TVariables, KResults> & InternalOptions) {
    const { keepTypename, ...apolloOptions } = options;
    const result = await this.apolloClient.query(apolloOptions);

    return {
      ...result,
      data:
        result?.data &&
        removeNodesAndEdges<KResults, KResultsOutput>(result.data, {
          keepTypename,
        }),
    };
  }
}
