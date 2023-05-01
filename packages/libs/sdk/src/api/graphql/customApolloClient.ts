import {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from '@apollo/client/core';
import {
  removeNodesAndEdges,
  ResultOutput,
} from '../utils/removeNodesAndEdges';

export class CustomApolloClient {
  constructor(public apolloClient: ApolloClient<NormalizedCacheObject>) {}

  async query<
    TVariables extends OperationVariables,
    KResults extends Record<string, any>,
    KResultsOutput extends ResultOutput
  >(options: QueryOptions<TVariables, KResults>) {
    const result = await this.apolloClient.query(options);

    return {
      ...result,
      data:
        result?.data &&
        removeNodesAndEdges<KResults, KResultsOutput>(result.data),
    };
  }
}
