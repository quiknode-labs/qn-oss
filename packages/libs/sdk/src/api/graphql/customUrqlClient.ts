import { Client, GraphQLRequestParams } from '@urql/core';
import {
  removeNodesAndEdges,
  ResultOutput,
} from '../utils/removeNodesAndEdges';

interface InternalOptions {
  keepTypename?: boolean;
}

export class CustomUrqlClient {
  constructor(public urqlClient: Client) {}

  async query<
    TVariables extends Record<string, any>,
    KResults extends Record<string, any>,
    KResultsOutput extends ResultOutput
  >(options: GraphQLRequestParams<any, TVariables> & InternalOptions) {
    const { keepTypename, query, variables, ...additionalOptions } = options;
    const result = await this.urqlClient.query(
      query,
      variables,
      additionalOptions
    );

    const { error } = result;
    if (error) {
      console.error(error.stack);
      throw error;
    }

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
