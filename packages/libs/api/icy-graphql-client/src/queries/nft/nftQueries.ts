import { ApolloQueryResult } from '@apollo/client';
import { IcyGraphQLClient } from 'client/icyGraphQLClient';
import {
  getNFTsRawQuery,
  WalletNFTsQueryResponse,
  WalletNFTsQueryVariables,
} from './getNFTsByWallet/getNFTsByWallet';

export class NFTQueries {
  constructor(private client: IcyGraphQLClient) {}

  async getNFTsByWallet(
    variables: WalletNFTsQueryVariables
  ): Promise<ApolloQueryResult<WalletNFTsQueryResponse>> {
    return await this.client.query({ query: getNFTsRawQuery, variables });
  }
}
