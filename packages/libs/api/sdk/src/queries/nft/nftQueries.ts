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
import { EventLogsQueryVariables } from './getNFTEventLogs/getNFTEventLogs';
import {
  getNFTDetailsRawQuery,
  NFTDetailsQueryVariables,
} from './getNFTDetails/getNFTDetails';
import { ContractEventLogsQueryResponse } from './getContractEventLogs/getContractEventLogs';
import {
  ContractNFTsQueryResponse,
  WalletNFTsQueryResponse,
  CollectionDetailsQueryResponse,
  NFTDetailsQueryResponse,
  EventLogsQueryResponse,
  PaginationArgs,
} from './sharedTypes';
import {
  NfTsWalletAndContract,
  NfTsWalletAndContractQuery,
  NfTsWalletAndContractQueryVariables,
  TrendingNftCollections,
  TrendingNftCollectionsQuery,
  TrendingNftCollectionsQueryVariables,
  WalletNfTs,
  WalletNfTsQueryVariables,
  ContractEventsLogs,
  ContractEventsLogsQuery,
  ContractEventsLogsQueryVariables,
  LogType,
  NftEventsLogsQueryVariables,
  NftEventsLogsQuery,
  NftEventsLogs,
} from '../../graphql/types';
import { TrendingNFTCollection } from './getTrendingNFTCollections/getTrendingNFTCollections';
import { NFTsByWalletAndContractsVariables } from './getNFTsByWalletAndContracts/getNFTsByWalletAndContracts';

const DEFAULT_LOG_FILTER_TYPES = [
  LogType.Transfer,
  LogType.Order,
  LogType.Mint,
];

export class NFTQueries {
  constructor(private client: CustomApolloClient) {}

  async getNFTsByWalletAddress(variables: WalletNfTsQueryVariables) {
    const { address, ...otherVariables } = variables;
    return this.client.query<
      WalletNfTsQueryVariables,
      WalletNFTsQueryResponse,
      WalletNFTsQueryResponse
    >({
      query: WalletNfTs,
      variables: {
        address: address.toLowerCase(),
        ...otherVariables,
      },
    });
  }

  async getNFTsByWalletENS(variables: WalletENSNFTsQueryVariables) {
    return this.client
      .query<
        WalletENSNFTsQueryVariables,
        WalletNFTsQueryResponse,
        WalletNFTsQueryResponse
      >({
        query: getWalletENSNFTsRawQuery,
        variables,
      })
      .catch((error) => {
        console.log(JSON.stringify(error, null, 2));
      });
  }

  async getNFTsByContractAddress(variables: ContractAddressNFTsQueryVariables) {
    const { address, ...otherVariables } = variables;
    return this.client.query<
      ContractAddressNFTsQueryVariables,
      ContractNFTsQueryResponse,
      ContractNFTsQueryResponse
    >({
      query: getContractAddressNFTsRawQuery,
      variables: {
        address: address.toLowerCase(),
        ...otherVariables,
      },
    });
  }

  async getCollectionDetails(variables: CollectionDetailsQueryVariables) {
    const { address, ...otherVariables } = variables;
    return this.client.query<
      CollectionDetailsQueryVariables,
      CollectionDetailsQueryResponse,
      CollectionDetailsQueryResponse
    >({
      query: getCollectionDetailsRawQuery,
      variables: {
        address: address.toLowerCase(),
        ...otherVariables,
      },
    });
  }

  async getNFTEventLogs(variables: EventLogsQueryVariables) {
    const {
      address,
      types = DEFAULT_LOG_FILTER_TYPES,
      ...otherVariables
    } = variables;
    return this.client.query<
      NftEventsLogsQueryVariables,
      NftEventsLogsQuery,
      EventLogsQueryResponse
    >({
      query: NftEventsLogs,
      variables: {
        ...otherVariables,
        address: address.toLowerCase(),
        filter: {
          typeIn: types,
        },
      },
    });
  }

  async getNFTDetails(variables: NFTDetailsQueryVariables) {
    const { contractAddress, ...otherVariables } = variables;
    return this.client.query<
      NFTDetailsQueryVariables,
      NFTDetailsQueryResponse,
      NFTDetailsQueryResponse
    >({
      query: getNFTDetailsRawQuery,
      variables: {
        contractAddress: contractAddress.toLowerCase(),
        ...otherVariables,
      },
    });
  }

  async getContractEventLogs(
    variables: {
      address: string;
      types?: LogType[];
    } & PaginationArgs
  ) {
    const {
      address,
      types = DEFAULT_LOG_FILTER_TYPES,
      ...otherVariables
    } = variables;
    return this.client.query<
      ContractEventsLogsQueryVariables,
      ContractEventsLogsQuery,
      ContractEventLogsQueryResponse
    >({
      query: ContractEventsLogs,
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
    variables: NFTsByWalletAndContractsVariables
  ) {
    const { address, contracts, ...otherVariables } = variables;
    const normalizedContracts = contracts.map((contract) =>
      contract.toLowerCase()
    );
    return this.client.query<
      NfTsWalletAndContractQueryVariables,
      NfTsWalletAndContractQuery,
      WalletNFTsQueryResponse
    >({
      query: NfTsWalletAndContract,
      variables: {
        ...otherVariables,
        address: address.toLowerCase(),
        filter: { contractAddressIn: normalizedContracts },
      },
    });
  }

  async getTrendingNFTCollections(
    variables?: TrendingNftCollectionsQueryVariables
  ) {
    return this.client.query<
      TrendingNftCollectionsQueryVariables,
      TrendingNftCollectionsQuery,
      TrendingNFTCollection
    >({
      query: TrendingNftCollections,
      variables,
    });
  }
}
