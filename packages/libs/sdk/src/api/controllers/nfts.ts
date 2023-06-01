import { CustomUrqlClient } from '../graphql/customUrqlClient';

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
  CodegenEthMainnetWalletNFTsByAddressDocument,
  CodegenEthMainnetWalletNFTsByEnsDocument,
  CodegenEthMainnetWalletNFTsByContractAddressDocument,
  CodegenEthMainnetTrendingCollectionsDocument,
  CodegenEthMainnetNFTDetailsDocument,
  CodegenEthMainnetNftCollectionDetailsDocument,
  CodegenEthSepoliaWalletNFTsByAddressDocument,
  CodegenEthSepoliaWalletNFTsByEnsDocument,
  CodegenEthSepoliaWalletNFTsByContractAddressDocument,
  CodegenEthSepoliaTrendingCollectionsDocument,
  CodegenEthSepoliaNFTDetailsDocument,
  CodegenEthSepoliaNftCollectionDetailsDocument,
  CodegenPolygonMainnetWalletNFTsByAddressDocument,
  CodegenPolygonMainnetWalletNFTsByEnsDocument,
  CodegenPolygonMainnetNFTsByContractAddressDocument,
  CodegenPolygonMainnetTrendingCollectionsDocument,
  CodegenPolygonMainnetNFTDetailsDocument,
  CodegenPolygonMainnetNftCollectionDetailsDocument,
} from '../graphql/generatedTypes';
import { ChainName } from '../types/chains';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { TypedDocumentNode } from '@urql/core';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';
import { NftErcStandards } from '../types/nfts';
import { isValidENSAddress } from '../utils/isValidENSAddress';

export class NftsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  async getByWallet(
    variables: WalletNFTsByAddressQueryVariablesType & NonQueryInput
  ): Promise<WalletNFTsByAddressFormattedResult> {
    const { address, ...allVariables } = variables;
    if (isValidENSAddress(address)) {
      return this.getByWalletENS({
        ensName: address,
        ...allVariables,
      });
    }

    return this.getByWalletAddress({
      address,
      ...allVariables,
    });
  }

  private async getByWalletENS(
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

    if (!walletByENS?.walletNFTs?.length) {
      // Address can still be valid ENS name, but not have any NFTs
      const address = walletByENS?.address || '';
      const ensName = walletByENS?.ensName || '';
      return {
        address: address,
        ensName: ensName,
        results: [],
        pageInfo: emptyPageInfo,
      };
    }

    const formattedResult = formatQueryResult<
      WalletNFTsByEnsQueryResultInfo,
      WalletNFTsByEnsFormattedResult
    >(walletByENS, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }

  private async getByWalletAddress(
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
      const address = walletByAddress?.address || '';
      const ensName = walletByAddress?.ensName || '';
      return {
        address: address,
        ensName: ensName,
        results: [],
        pageInfo: emptyPageInfo,
      };
    }

    const formattedResult = formatQueryResult<
      WalletNFTsByAddressQueryResultInfo,
      WalletNFTsByAddressFormattedResult
    >(walletByAddress, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }

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
      // Remove address too since it was only used as a key field
      const { __typename, address, ...newResults } = results;
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
}
