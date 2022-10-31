import { ApolloQueryResult } from '@apollo/client';
import { CustomApolloClient } from '../../client/customApolloClient';
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
import { WalletNfTs, WalletNfTsQueryVariables } from '../../remote/graphql';

const DEFAULT_LOG_FILTER_TYPES = ['TRANSFER', 'ORDER', 'MINT'];

export class NFTQueries {
  constructor(private client: CustomApolloClient) {}

  async getNFTsByWalletAddress(
    variables: WalletNfTsQueryVariables
  ): Promise<ApolloQueryResult<WalletNFTsQueryResponse>> {
    const { address, ...otherVariables } = variables;
    return await this.client.query({
      query: WalletNfTs,
      variables: {
        address: address.toLowerCase(),
        ...otherVariables,
      },
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
    const { address, ...otherVariables } = variables;
    return await this.client.query({
      query: getContractAddressNFTsRawQuery,
      variables: {
        address: address.toLowerCase(),
        ...otherVariables,
      },
    });
  }

  async getCollectionDetails(
    variables: CollectionDetailsQueryVariables
  ): Promise<ApolloQueryResult<CollectionDetailsQueryResponse>> {
    const { address, ...otherVariables } = variables;
    return await this.client.query({
      query: getCollectionDetailsRawQuery,
      variables: {
        address: address.toLowerCase(),
        ...otherVariables,
      },
    });
  }

  async getNFTEventLogs(
    variables: EventLogsQueryVariables
  ): Promise<ApolloQueryResult<EventLogsQueryResponse>> {
    const {
      address,
      types = DEFAULT_LOG_FILTER_TYPES,
      ...otherVariables
    } = variables;
    return await this.client.query({
      query: getNFTEventLogsRawQuery,
      variables: {
        ...otherVariables,
        address: address.toLowerCase(),
        filter: {
          typeIn: types,
        },
      },
    });
  }

  async getNFTDetails(
    variables: NFTDetailsQueryVariables
  ): Promise<ApolloQueryResult<NFTDetailsQueryResponse>> {
    const { contractAddress, ...otherVariables } = variables;
    return await this.client.query({
      query: getNFTDetailsRawQuery,
      variables: {
        contractAddress: contractAddress.toLowerCase(),
        ...otherVariables,
      },
    });
  }

  async getContractEventLogs(
    variables: ContractEventLogQueryVariables
  ): Promise<ApolloQueryResult<ContractEventLogsQueryResponse>> {
    const {
      address,
      types = DEFAULT_LOG_FILTER_TYPES,
      ...otherVariables
    } = variables;
    return await this.client.query({
      query: getContractEventLogsRawQuery,
      variables: {
        ...otherVariables,
        address: address.toLowerCase(),
        filter: {
          typeIn: types,
        },
      },
    });
  }

  async getNFTsByWalletAndContracts(
    variables: NFTWalletAndContractQueryVariables
  ): Promise<ApolloQueryResult<WalletNFTsQueryResponse>> {
    const { address, contracts, ...otherVariables } = variables;
    const normalizedContracts = contracts.map((contract) =>
      contract.toLowerCase()
    );
    const response = await this.client.query({
      query: getNFTsWalletAndContractsRawQuery,
      variables: {
        ...otherVariables,
        address: address.toLowerCase(),
        filter: { contractAddressIn: normalizedContracts },
      },
    });
    return response;
  }
}
