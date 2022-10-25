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
  getNFTDetailsRawQuery,
  NFTDetailsQueryVariables,
} from './getNFTDetails/getNFTDetails';
import {
  getContractEventLogsRawQuery,
  ContractEventLogQueryVariables,
} from './getContractEventLogs/getContractEventLogs';
import {
  getNFTsWalletAndContractsRawQuery,
  NFTWalletAndContractQueryVariables,
} from './getNFTsByWalletAndContracts/getNFTsByWalletAndContracts';
import {
  ContractNFTsQueryResponse,
  WalletNFTsQueryResponse,
  CollectionDetailsQueryResponse,
  EventLogsQueryResponse,
  NFTDetailsQueryResponse,
  ContractEventLogsQueryResponse,
} from './sharedTypes';

const DEFAULT_LOG_FILTER_TYPES = ['TRANSFER', 'ORDER', 'MINT'];

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
    const { types = DEFAULT_LOG_FILTER_TYPES, ...otherVariables } = variables;
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

  async getNFTDetails(
    variables: NFTDetailsQueryVariables
  ): Promise<ApolloQueryResult<NFTDetailsQueryResponse>> {
    return await this.client.query({
      query: getNFTDetailsRawQuery,
      variables,
    });
  }

  async getContractEventLogs(
    variables: ContractEventLogQueryVariables
  ): Promise<ApolloQueryResult<ContractEventLogsQueryResponse>> {
    const { types = DEFAULT_LOG_FILTER_TYPES, ...otherVariables } = variables;
    return await this.client.query({
      query: getContractEventLogsRawQuery,
      variables: {
        ...otherVariables,
        filter: {
          typeIn: types,
        },
      },
    });
  }

  async getNFTsByWalletAndContracts(
    variables: NFTWalletAndContractQueryVariables
  ): Promise<ApolloQueryResult<WalletNFTsQueryResponse>> {
    const { contracts, ...otherVariables } = variables;
    const response = await this.client.query({
      query: getNFTsWalletAndContractsRawQuery,
      variables: {
        ...otherVariables,
        filter: { contractAddressIn: contracts },
      },
    });
    return response;
  }
}
