import { CustomUrqlClient } from '../graphql/customUrqlClient';

import {
  WalletNFTsByEnsQueryResultInfo,
  WalletNFTsByEnsResult,
  WalletNFTsByEnsQueryResultFull,
  WalletNFTsByEnsQueryVariables,
  WalletNFTsByEnsQuery,
  WalletNFTsByEnsInput,
} from '../types/nfts/getByWalletENS';
import {
  WalletNFTsByAddressQueryResultInfo,
  WalletNFTsByAddressResult,
  WalletNFTByAddressQueryResultFull,
  WalletNFTsByAddressQueryVariables,
  WalletNFTsByAddressQuery,
  WalletNFTsByAddressInput,
  walletByAddressValidator,
} from '../types/nfts/getByWalletAddress';
import {
  NFTDetailsResult,
  NFTDetailsQueryResultFull,
  NFTDetailsQueryVariables,
  NFTDetailsQuery,
  NFTDetailsInput,
  nftDetailsValidator,
} from '../types/nfts/getNFTDetails';
import {
  NftCollectionDetailsResult,
  NftCollectionDetailsQueryResultFull,
  NftCollectionDetailsQueryVariables,
  NftCollectionDetailsQuery,
  NftCollectionDetailsInput,
  nftCollectionDetailsValidator,
} from '../types/nfts/getCollectionDetails';
import {
  NFTTrendingCollectionsQueryResultBody,
  NFTTrendingCollectionResult,
  NFTTrendingCollectionsQueryResultFull,
  NFTTrendingCollectionsQueryVariables,
  NFTTrendingCollectionsQuery,
  NFTTrendingCollectionsInput,
  nftTrendingCollectionsValidator,
} from '../types/nfts/getTrendingCollections';
import {
  NFTsByContractAddressQueryResultInfo,
  NFTsByContractAddressResult,
  NFTsByContractAddressQueryResultFull,
  NFTsByContractAddressQueryVariables,
  NFTsByContractAddressQuery,
  NFTsByContractAddressInput,
  nftsByContractAddressValidator,
} from '../types/nfts/getByContractAddress';

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
import { NftErcStandards } from '../types/nfts';
import { isValidENSAddress } from '../utils/isValidENSAddress';
import { ValidateInput } from '../../lib/validation/ValidateInput';

export class NftsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @ValidateInput(walletByAddressValidator)
  async getByWallet(
    variables: WalletNFTsByAddressInput
  ): Promise<WalletNFTsByAddressResult> {
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
    variables: WalletNFTsByEnsInput
  ): Promise<WalletNFTsByEnsResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
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
      WalletNFTsByEnsQueryVariables, // What the user can pass in
      WalletNFTsByEnsQuery, // The actual unmodified result from query
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
      WalletNFTsByEnsResult
    >(walletByENS, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }

  private async getByWalletAddress(
    variables: WalletNFTsByAddressInput
  ): Promise<WalletNFTsByAddressResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
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
      WalletNFTsByAddressQueryVariables, // What the user can pass in
      WalletNFTsByAddressQuery, // The actual unmodified result from query
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
      WalletNFTsByAddressResult
    >(walletByAddress, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }

  @ValidateInput(nftTrendingCollectionsValidator)
  async getTrendingCollections(
    variables: NFTTrendingCollectionsInput
  ): Promise<NFTTrendingCollectionResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetTrendingCollectionsDocument,
      polygon: CodegenPolygonMainnetTrendingCollectionsDocument,
      ethereumSepolia: CodegenEthSepoliaTrendingCollectionsDocument,
    };

    const {
      data: { [userChain]: trendingCollections },
    } = await this.client.query<
      NFTTrendingCollectionsQueryVariables, // What the user can pass in
      NFTTrendingCollectionsQuery, // The actual unmodified result from query
      NFTTrendingCollectionsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    const formattedResult = formatQueryResult<
      NFTTrendingCollectionsQueryResultBody,
      NFTTrendingCollectionResult
    >(
      trendingCollections,
      'trendingCollections',
      'trendingCollectionsPageInfo',
      'collection'
    );

    return formattedResult;
  }

  @ValidateInput(nftsByContractAddressValidator)
  async getByContractAddress(
    variables: NFTsByContractAddressInput
  ): Promise<NFTsByContractAddressResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
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
      NFTsByContractAddressQueryVariables, // What the user can pass in
      NFTsByContractAddressQuery, // The actual unmodified result from query
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

    const setErcStandard = (results: any): NFTsByContractAddressResult => {
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
      NFTsByContractAddressResult
    >(collection, 'nfts', 'nftsPageInfo', null, setErcStandard);

    return formattedResult;
  }

  @ValidateInput(nftDetailsValidator)
  async getNFTDetails(variables: NFTDetailsInput): Promise<NFTDetailsResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
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
      NFTDetailsQueryVariables, // What the user can pass in
      NFTDetailsQuery, // The actual unmodified result from query
      NFTDetailsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (nft) return { nft };
    return { nft: null };
  }

  @ValidateInput(nftCollectionDetailsValidator)
  async getCollectionDetails(
    variables: NftCollectionDetailsInput
  ): Promise<NftCollectionDetailsResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
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
      NftCollectionDetailsQueryVariables, // What the user can pass in
      NftCollectionDetailsQuery, // The actual unmodified result from query
      NftCollectionDetailsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (collection) return { collection };
    return { collection: null };
  }

  async verifyOwnership(
    variables: VerifyOwnershipUserVariablesType
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
