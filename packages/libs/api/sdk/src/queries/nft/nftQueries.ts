import { ApolloQueryResult } from '@apollo/client';
import { CustomApolloClient } from '../../client/customApolloClient';
import {
  getWalletAddressNFTsRawQuery,
  WalletAddressNFTsQueryVariables,
} from './getNFTsByWalletAddress/getNFTsByWalletAddress';
import {
  getWalletENSNFTsRawQuery,
  WalletENSNFTsQueryVariables,
} from './getNFTsByWalletENS/getNFTsByWalletENS';
import { WalletNFTsQueryResponse } from './sharedTypes';

export class NFTQueries {
  constructor(private client: CustomApolloClient) {}

  async getNFTsByWalletAddress(
    variables: WalletAddressNFTsQueryVariables
  ): Promise<ApolloQueryResult<WalletNFTsQueryResponse>> {
    return await this.client.query({
      query: getWalletAddressNFTsRawQuery,
      variables,
    });
  }

  async getNFTsByWalletENS(
    variables: WalletENSNFTsQueryVariables
  ): Promise<ApolloQueryResult<WalletNFTsQueryResponse>> {
    return await this.client.query({
      query: getWalletENSNFTsRawQuery,
      variables,
    });
  }
}
