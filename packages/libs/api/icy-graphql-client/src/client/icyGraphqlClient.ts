import {
  ApolloClient,
  NormalizedCacheObject,
  QueryOptions,
} from '@apollo/client';
import { removeNodesAndEdges } from 'utils/removeNodesAndEdges';

export class IcyGraphQLClient {
  constructor(public apolloClient: ApolloClient<NormalizedCacheObject>) {}

  /**
   * @todo improve typing here
   */
  async query(options: QueryOptions<any, any>): Promise<any> {
    const result = await this.apolloClient.query(options);

    if (result?.data && typeof result?.data === 'object') {
      result.data = removeNodesAndEdges(result.data);
    }

    return result;
  }
}
