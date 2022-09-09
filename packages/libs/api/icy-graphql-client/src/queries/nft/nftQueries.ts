import { ApolloQueryResult } from '@apollo/client';
import { IcyGraphqlClient } from 'client/icyGraphqlClient';
import {
  getNFTsRawQuery,
  WalletNFTsQueryResponse,
  WalletNFTsQueryVariables,
} from './getNFTsByWallet/getNFTsByWallet';

export class NFTQueries {
  constructor(private client: IcyGraphqlClient) {}

  async getNFTsByWallet(
    variables: WalletNFTsQueryVariables
  ): Promise<ApolloQueryResult<WalletNFTsQueryResponse>> {
    return await this.client.query({ query: getNFTsRawQuery, variables });
  }
}
