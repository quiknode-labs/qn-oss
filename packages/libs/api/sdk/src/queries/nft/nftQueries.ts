import { OperationVariables, DocumentNode } from '@apollo/client';
import { CustomApolloClient } from '../../client/customApolloClient';

import { WalletNFTByEnsType } from '../types/getNFTsByWalletENS';
import { ChainName } from '../types/chains';
import { QNApolloErrorHandler } from '../../utils/QNApolloErrorHandler';

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

  @QNApolloErrorHandler
  async getByWalletENS(variables: WalletNftsByEnsQueryVariables) {
    const { WalletNFTsByEns } = this.queries;
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
  }
}
