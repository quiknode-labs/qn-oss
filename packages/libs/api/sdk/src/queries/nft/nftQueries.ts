import { ApolloError, OperationVariables, DocumentNode } from '@apollo/client';
import { CustomApolloClient } from '../../client/customApolloClient';

import { WalletNFTByEnsType } from '../types/getNFTsByWalletENS';
import { ChainName } from '../types/chains';

export class NFTQueries<
  WalletNftsByEnsQuery extends Record<string, any>,
  WalletNftsByEnsQueryVariables extends OperationVariables
> {
  constructor(
    private client: CustomApolloClient,
    private chainName: ChainName,
    private queries: {
      WalletNFTsByEns: DocumentNode;
    }
  ) {}

  async getByWalletENS(variables: WalletNftsByEnsQueryVariables) {
    const { WalletNFTsByEns } = this.queries;
    try {
      const {
        data: { [this.chainName]: data },
      } = await this.client.query<
        WalletNftsByEnsQueryVariables, // What the user can pass in
        WalletNftsByEnsQuery, // The actual unmodified result from query
        WalletNFTByEnsType // the modified result (edges and nodes removed)
      >({
        query: WalletNFTsByEns, // The actual graphql query
        variables,
      });
      return data;
    } catch (error: unknown) {
      // TODO: handle catching errors better, might be good to have  "Debug" mode for development that shows the error, otherwise
      // spit out a "something went wrong" with a link to file issues since the user shouldn't ever hit GQL validation errors
      if (error instanceof ApolloError) {
        const apolloErr = error as ApolloError;
        console.error(apolloErr.message);
        console.error(JSON.stringify(error, null, 2));
      } else {
        console.error(error);
      }
      return null;
    }
  }
}
