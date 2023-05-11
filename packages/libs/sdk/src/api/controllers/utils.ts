import {
  ApolloClient,
  QueryOptions,
  NormalizedCacheObject,
} from '@apollo/client';

export class UtilsController {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  async graphQuery(
    query: QueryOptions['query'],
    variables?: QueryOptions['variables']
  ) {
    return this.client.query({
      query,
      variables,
    });
  }
}
