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
  NFTTrendingCollectionsQueryResultBody,
  NFTTrendingCollectionFormattedResult,
  NFTTrendingCollectionsQueryResultFull,
  NFTTrendingCollectionsQueryVariablesType,
  NFTTrendingCollectionsQueryType,
} from '../types/nfts/getTrendingCollections';
import {
  CodegenEthMainnetWalletNFTsByAddressDocument,
  CodegenEthMainnetWalletNFTsByEnsDocument,
  CodegenEthSepoliaWalletNFTsByAddressDocument,
  CodegenEthSepoliaWalletNFTsByEnsDocument,
  CodegenPolygonMainnetWalletNFTsByAddressDocument,
  CodegenPolygonMainnetWalletNFTsByEnsDocument,
  CodegenEthMainnetTrendingCollectionsDocument,
  CodegenEthSepoliaTrendingCollectionsDocument,
  CodegenPolygonMainnetTrendingCollectionsDocument,
} from '../graphql/generatedTypes';

import { ChainName } from '../types/chains';
import { QNApolloErrorHandler } from '../utils/QNApolloErrorHandler';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { TypedDocumentNode } from '@apollo/client';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';

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
    const { chain, ...queryVariables } = variables;
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
}
