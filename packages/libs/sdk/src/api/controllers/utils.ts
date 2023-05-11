import {
  ApolloClient,
  QueryOptions,
  NormalizedCacheObject,
} from '@apollo/client/core';

interface GraphQueryOptions {
  query: QueryOptions['query'];
  variables?: QueryOptions['variables'];
}

export class UtilsController {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  async graphQuery({ query, variables }: GraphQueryOptions) {
    return this.client.query({
      query,
      variables,
    });
  }
}
