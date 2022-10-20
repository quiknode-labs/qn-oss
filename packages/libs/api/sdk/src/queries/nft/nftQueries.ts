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
import {
  getContractAddressNFTsRawQuery,
  ContractAddressNFTsQueryVariables,
} from './getNFTsByContractAddress/getNFTsByContractAddress';
import {
  getCollectionDetailsRawQuery,
  CollectionDetailsQueryVariables,
} from './getCollectionDetails/getCollectionDetails';
import {
  EventLogsQueryVariables,
  getNFTEventLogsRawQuery,
} from './getNFTEventLogs/getNFTEventLogs';
import {
  ContractNFTsQueryResponse,
  WalletNFTsQueryResponse,
  CollectionDetailsQueryResponse,
  EventLogsQueryResponse,
} from './sharedTypes';

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

  async getNFTsByContractAddress(
    variables: ContractAddressNFTsQueryVariables
  ): Promise<ApolloQueryResult<ContractNFTsQueryResponse>> {
    return await this.client.query({
      query: getContractAddressNFTsRawQuery,
      variables,
    });
  }

  async getCollectionDetails(
    variables: CollectionDetailsQueryVariables
  ): Promise<ApolloQueryResult<CollectionDetailsQueryResponse>> {
    return await this.client.query({
      query: getCollectionDetailsRawQuery,
      variables,
    });
  }

  async getNFTEventLogs(
    variables: EventLogsQueryVariables
  ): Promise<ApolloQueryResult<EventLogsQueryResponse>> {
    const { types = ['TRANSFER', 'ORDER', 'MINT'], ...otherVariables } =
      variables;
    return await this.client.query({
      query: getNFTEventLogsRawQuery,
      variables: {
        ...otherVariables,
        filter: {
          typeIn: types,
        },
      },
    });
  }
}
