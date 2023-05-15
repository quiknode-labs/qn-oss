import { CustomApolloClient } from '../graphql/customApolloClient';

import {
  WalletNFTsByEnsQueryResultInfo,
  WalletNFTsByEnsFormattedResult,
  WalletNFTsByEnsQueryResultFull,
  WalletNFTsByEnsQueryVariablesType,
  WalletNFTsByEnsQueryType,
} from '../types/nfts/getByWalletENS';
import {
  WalletNFTsByAddressQueryResultInfo,
  WalletNFTsByAddressFormattedResult,
  WalletNFTByAddressQueryResultFull,
  WalletNFTsByAddressQueryVariablesType,
  WalletNFTsByAddressQueryType,
} from '../types/nfts/getByWalletAddress';
import {
  NFTDetailsFormattedResult,
  NFTDetailsQueryResultFull,
  NFTDetailsQueryVariablesType,
  NFTDetailsQueryType,
} from '../types/nfts/getNFTDetails';
import {
  NftCollectionDetailsFormattedResult,
  NftCollectionDetailsQueryResultFull,
  NftCollectionDetailsQueryVariablesType,
  NftCollectionDetailsQueryType,
} from '../types/nfts/getCollectionDetails';
import {
  NFTTrendingCollectionsQueryResultBody,
  NFTTrendingCollectionFormattedResult,
  NFTTrendingCollectionsQueryResultFull,
  NFTTrendingCollectionsQueryVariablesType,
  NFTTrendingCollectionsQueryType,
} from '../types/nfts/getTrendingCollections';
import {
  NFTsByContractAddressQueryResultInfo,
  NFTsByContractAddressFormattedResult,
  NFTsByContractAddressQueryResultFull,
  NFTsByContractAddressQueryVariablesType,
  NFTsByContractAddressQueryType,
} from '../types/nfts/getByContractAddress';
import {
  CollectionEventsQueryResultInfo,
  CollectionEventsFormattedResult,
  CollectionEventsQueryResultFull,
  CollectionEventsQueryVariablesType,
  CollectionEventsQueryType,
} from '../types/nfts/getCollectionEvents';
import {
  NFTEventsQueryResultInfo,
  NFTEventsFormattedResult,
  NFTEventsQueryResultFull,
  NFTEventsQueryVariablesType,
  NFTEventsQueryType,
} from '../types/nfts/getNFTEvents';
import {
  VerifyOwnershipQueryResultInfo,
  VerifyOwnershipQueryResultFull,
  VerifyOwnershipQueryType,
  VerifyOwnershipQueryVariablesType,
  VerifyOwnershipUserVariablesType,
} from '../types/nfts/verifyOwnership';
import {
  CodegenEthMainnetWalletNFTsByAddressDocument,
  CodegenEthMainnetWalletNFTsByEnsDocument,
  CodegenEthMainnetWalletNFTsByContractAddressDocument,
  CodegenEthMainnetTrendingCollectionsDocument,
  CodegenEthMainnetNFTDetailsDocument,
  CodegenEthMainnetNftCollectionDetailsDocument,
  CodegenEthMainnetEventsByCollectionDocument,
  CodegenEthereumMainnetEventsByNftDocument,
  CodegenEthMainnetVerifyOwnershipDocument,
  CodegenEthSepoliaWalletNFTsByAddressDocument,
  CodegenEthSepoliaWalletNFTsByEnsDocument,
  CodegenEthSepoliaWalletNFTsByContractAddressDocument,
  CodegenEthSepoliaTrendingCollectionsDocument,
  CodegenEthSepoliaNFTDetailsDocument,
  CodegenEthSepoliaNftCollectionDetailsDocument,
  CodegenEthSepoliaEventsByCollectionDocument,
  CodegenEthSepoliaEventsByNftDocument,
  CodegenEthSepoliaVerifyOwnershipDocument,
  CodegenPolygonMainnetWalletNFTsByAddressDocument,
  CodegenPolygonMainnetWalletNFTsByEnsDocument,
  CodegenPolygonMainnetNFTsByContractAddressDocument,
  CodegenPolygonMainnetTrendingCollectionsDocument,
  CodegenPolygonMainnetNFTDetailsDocument,
  CodegenPolygonMainnetNftCollectionDetailsDocument,
  CodegenPolygonMainnetEventsByCollectionDocument,
  CodegenPolygonMainnetEventsByNftDocument,
  CodegenPolygonMainnetVerifyOwnershipDocument,
} from '../graphql/generatedTypes';
import { ChainName } from '../types/chains';
import { QNApolloErrorHandler } from '../utils/QNApolloErrorHandler';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { TypedDocumentNode } from '@apollo/client/core';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';
import { NftErcStandards } from '../types/nfts';

export class NftsController {
  constructor(
    private client: CustomApolloClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @QNApolloErrorHandler
  async getByWalletENS(
    variables: WalletNFTsByEnsQueryVariablesType & NonQueryInput
  ): Promise<WalletNFTsByEnsFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetWalletNFTsByEnsDocument,
      polygon: CodegenPolygonMainnetWalletNFTsByEnsDocument,
      ethereumSepolia: CodegenEthSepoliaWalletNFTsByEnsDocument,
    };

    const {
      data: {
        [userChain]: { walletByENS },
      },
    } = await this.client.query<
      WalletNFTsByEnsQueryVariablesType, // What the user can pass in
      WalletNFTsByEnsQueryType, // The actual unmodified result from query
      WalletNFTsByEnsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!walletByENS?.walletNFTs?.length)
      return { address: '', ensName: '', results: [], pageInfo: emptyPageInfo };

    const formattedResult = formatQueryResult<
      WalletNFTsByEnsQueryResultInfo,
      WalletNFTsByEnsFormattedResult
    >(walletByENS, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }

  @QNApolloErrorHandler
  async getByWalletAddress(
    variables: WalletNFTsByAddressQueryVariablesType & NonQueryInput
  ): Promise<WalletNFTsByAddressFormattedResult> {
    const { chain, contractAddresses, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetWalletNFTsByAddressDocument,
      polygon: CodegenPolygonMainnetWalletNFTsByAddressDocument,
      ethereumSepolia: CodegenEthSepoliaWalletNFTsByAddressDocument,
    };

    const {
      data: {
        [userChain]: { walletByAddress },
      },
    } = await this.client.query<
      WalletNFTsByAddressQueryVariablesType, // What the user can pass in
      WalletNFTsByAddressQueryType, // The actual unmodified result from query
      WalletNFTByAddressQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!walletByAddress?.walletNFTs?.length) {
      return { address: '', ensName: '', results: [], pageInfo: emptyPageInfo };
    }

    const formattedResult = formatQueryResult<
      WalletNFTsByAddressQueryResultInfo,
      WalletNFTsByAddressFormattedResult
    >(walletByAddress, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }

  @QNApolloErrorHandler
  async getTrendingCollections(
    variables: NFTTrendingCollectionsQueryVariablesType & NonQueryInput
  ): Promise<NFTTrendingCollectionFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetTrendingCollectionsDocument,
      polygon: CodegenPolygonMainnetTrendingCollectionsDocument,
      ethereumSepolia: CodegenEthSepoliaTrendingCollectionsDocument,
    };

    const {
      data: { [userChain]: trendingCollections },
    } = await this.client.query<
      NFTTrendingCollectionsQueryVariablesType, // What the user can pass in
      NFTTrendingCollectionsQueryType, // The actual unmodified result from query
      NFTTrendingCollectionsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!trendingCollections?.trendingCollections?.length) {
      return { results: [], pageInfo: emptyPageInfo };
    }

    const formattedResult = formatQueryResult<
      NFTTrendingCollectionsQueryResultBody,
      NFTTrendingCollectionFormattedResult
    >(
      trendingCollections,
      'trendingCollections',
      'trendingCollectionsPageInfo',
      'collection'
    );

    return formattedResult;
  }

  @QNApolloErrorHandler
  async getByContractAddress(
    variables: NFTsByContractAddressQueryVariablesType & NonQueryInput
  ): Promise<NFTsByContractAddressFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetWalletNFTsByContractAddressDocument,
      polygon: CodegenPolygonMainnetNFTsByContractAddressDocument,
      ethereumSepolia: CodegenEthSepoliaWalletNFTsByContractAddressDocument,
    };

    const {
      data: {
        [userChain]: { collection },
      },
    } = await this.client.query<
      NFTsByContractAddressQueryVariablesType, // What the user can pass in
      NFTsByContractAddressQueryType, // The actual unmodified result from query
      NFTsByContractAddressQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
      keepTypename: true,
    });

    if (!collection?.nfts?.length) {
      return {
        standard: null,
        results: [],
        pageInfo: emptyPageInfo,
      };
    }

    const setErcStandard = (
      results: any
    ): NFTsByContractAddressFormattedResult => {
      const standardMap: Record<string, NftErcStandards> = {
        ERC1155Collection: 'ERC1155',
        ERC721Collection: 'ERC721',
      };
      const { __typename, ...newResults } = results;
      return {
        ...newResults,
        standard: standardMap[results['__typename']] || null,
      };
    };

    const formattedResult = formatQueryResult<
      NFTsByContractAddressQueryResultInfo,
      NFTsByContractAddressFormattedResult
    >(collection, 'nfts', 'nftsPageInfo', null, setErcStandard);

    return formattedResult;
  }

  @QNApolloErrorHandler
  async getNFTDetails(
    variables: NFTDetailsQueryVariablesType & NonQueryInput
  ): Promise<NFTDetailsFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetNFTDetailsDocument,
      polygon: CodegenPolygonMainnetNFTDetailsDocument,
      ethereumSepolia: CodegenEthSepoliaNFTDetailsDocument,
    };

    const {
      data: {
        [userChain]: { nft },
      },
    } = await this.client.query<
      NFTDetailsQueryVariablesType, // What the user can pass in
      NFTDetailsQueryType, // The actual unmodified result from query
      NFTDetailsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (nft) return { nft };
    return { nft: null };
  }

  @QNApolloErrorHandler
  async getCollectionDetails(
    variables: NftCollectionDetailsQueryVariablesType & NonQueryInput
  ): Promise<NftCollectionDetailsFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetNftCollectionDetailsDocument,
      polygon: CodegenPolygonMainnetNftCollectionDetailsDocument,
      ethereumSepolia: CodegenEthSepoliaNftCollectionDetailsDocument,
    };

    const {
      data: {
        [userChain]: { collection },
      },
    } = await this.client.query<
      NftCollectionDetailsQueryVariablesType, // What the user can pass in
      NftCollectionDetailsQueryType, // The actual unmodified result from query
      NftCollectionDetailsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (collection) return { collection };
    return { collection: null };
  }

  @QNApolloErrorHandler
  async getCollectionEvents(
    variables: CollectionEventsQueryVariablesType & NonQueryInput
  ): Promise<CollectionEventsFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetEventsByCollectionDocument,
      polygon: CodegenPolygonMainnetEventsByCollectionDocument,
      ethereumSepolia: CodegenEthSepoliaEventsByCollectionDocument,
    };
    const {
      data: {
        [userChain]: { collection },
      },
    } = await this.client.query<
      CollectionEventsQueryVariablesType, // What the user can pass in
      CollectionEventsQueryType, // The actual unmodified result from query
      CollectionEventsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!collection?.tokenEvents?.length)
      return { results: [], pageInfo: emptyPageInfo };

    const formattedResult = formatQueryResult<
      CollectionEventsQueryResultInfo,
      CollectionEventsFormattedResult
    >(collection, 'tokenEvents', 'tokenEventsPageInfo');

    return formattedResult;
  }

  async getNFTEvents(
    variables: NFTEventsQueryVariablesType & NonQueryInput
  ): Promise<NFTEventsFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthereumMainnetEventsByNftDocument,
      polygon: CodegenPolygonMainnetEventsByNftDocument,
      ethereumSepolia: CodegenEthSepoliaEventsByNftDocument,
    };
    const {
      data: {
        [userChain]: { nft },
      },
    } = await this.client.query<
      NFTEventsQueryVariablesType, // What the user can pass in
      NFTEventsQueryType, // The actual unmodified result from query
      NFTEventsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!nft?.tokenEvents?.length)
      return { results: [], pageInfo: emptyPageInfo };

    const formattedResult = formatQueryResult<
      NFTEventsQueryResultInfo,
      NFTEventsFormattedResult
    >(nft, 'tokenEvents', 'tokenEventsPageInfo');

    return formattedResult;
  }

  async verifyOwnership(
    variables: VerifyOwnershipUserVariablesType & NonQueryInput
  ): Promise<boolean> {
    const { chain, walletAddress, contractAddresses } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetVerifyOwnershipDocument,
      polygon: CodegenPolygonMainnetVerifyOwnershipDocument,
      ethereumSepolia: CodegenEthSepoliaVerifyOwnershipDocument,
    };
    const {
      data: {
        [userChain]: { walletByAddress },
      },
    } = await this.client.query<
      VerifyOwnershipQueryVariablesType, // What the user can pass in
      VerifyOwnershipQueryType, // The actual unmodified result from query
      VerifyOwnershipQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: { address: walletAddress, contractAddresses },
    });

    // Return false by default if no contract addresses are passed in
    if (!contractAddresses?.length) return false;

    return !!walletByAddress?.walletNFTs?.length;
  }
}
