import { Client, GraphQLRequestParams } from '@urql/core';
import {
  removeNodesAndEdges,
  ResultOutput,
} from '../utils/removeNodesAndEdges';

export class CustomUrqlClient {
  constructor(public urqlClient: Client) {}

  async query<
    TVariables extends Record<string, unknown>,
    KResults extends Record<string, unknown>,
    KResultsOutput extends ResultOutput
  >(
    options: GraphQLRequestParams<any, TVariables>
  ): Promise<{ data: KResultsOutput | undefined }> {
    const { query, variables, ...additionalOptions } = options;
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
        removeNodesAndEdges<KResults, KResultsOutput>(result.data),
    };
  }
}
