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
  VerifyOwnershipByAddressQueryResultFull,
  VerifyOwnershipByAddressQueryType,
  VerifyOwnershipByAddressQueryVariablesType,
  verifyOwnershipValidator,
  VerifyOwnershipByAddressInput,
} from '../types/nfts/verifyOwnershipByAddress';
import {
  VerifyOwnershipByENSQueryResultFull,
  VerifyOwnershipByENSQueryType,
  VerifyOwnershipByENSQueryVariablesType,
  VerifyOwnershipByENSInput,
} from '../types/nfts/verifyOwnershipByENS';
import {
  CodegenEthMainnetWalletNFTsByAddressDocument,
  CodegenEthMainnetWalletNFTsByEnsDocument,
  CodegenEthMainnetWalletNFTsByContractAddressDocument,
  CodegenEthMainnetTrendingCollectionsDocument,
  CodegenEthMainnetNFTDetailsDocument,
  CodegenEthMainnetNftCollectionDetailsDocument,
  CodegenEthMainnetVerifyOwnershipByAddressDocument,
  CodegenEthMainnetVerifyOwnershipByENSDocument,
} from '../graphql/generatedTypes';
import { ChainName } from '../types/chains';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NftErcStandards } from '../types/nfts';
import { isValidENSAddress } from '../utils/isValidENSAddress';
import { ValidateInput } from '../../lib/validation/ValidateInput';
import { modifyQueryForChain } from '../graphql/modifyQueryForChain';

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
    const query = modifyQueryForChain<
      WalletNFTsByEnsQueryVariables, // What the user can pass in
      WalletNFTsByEnsQuery // The actual unmodified result from query
    >(userChain, CodegenEthMainnetWalletNFTsByEnsDocument);

    const result = await this.client.query<
      WalletNFTsByEnsQueryVariables, // What the user can pass in
      WalletNFTsByEnsQuery, // The actual unmodified result from query
      WalletNFTsByEnsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: queryVariables,
    });

    const walletByENS = result?.data?.[userChain]?.walletByENS;
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

    const query = modifyQueryForChain<
      WalletNFTsByAddressQueryVariables, // What the user can pass in
      WalletNFTsByAddressQuery // The actual unmodified result from query
    >(userChain, CodegenEthMainnetWalletNFTsByAddressDocument);

    const result = await this.client.query<
      WalletNFTsByAddressQueryVariables, // What the user can pass in
      WalletNFTsByAddressQuery, // The actual unmodified result from query
      WalletNFTByAddressQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: queryVariables,
    });

    const walletByAddress = result?.data?.[userChain]?.walletByAddress;
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
    const query = modifyQueryForChain<
      NFTTrendingCollectionsQueryVariables, // What the user can pass in
      NFTTrendingCollectionsQuery // The actual unmodified result from query
    >(userChain, CodegenEthMainnetTrendingCollectionsDocument);

    const result = await this.client.query<
      NFTTrendingCollectionsQueryVariables, // What the user can pass in
      NFTTrendingCollectionsQuery, // The actual unmodified result from query
      NFTTrendingCollectionsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: queryVariables,
    });

    const chainResult = result?.data?.[userChain];
    if (chainResult?.trendingCollections?.length) {
      const formattedResult = formatQueryResult<
        NFTTrendingCollectionsQueryResultBody,
        NFTTrendingCollectionResult
      >(
        chainResult,
        'trendingCollections',
        'trendingCollectionsPageInfo',
        'collection'
      );

      return formattedResult;
    }
    return {
      results: [],
      pageInfo: emptyPageInfo,
    };
  }

  @ValidateInput(nftsByContractAddressValidator)
  async getByContractAddress(
    variables: NFTsByContractAddressInput
  ): Promise<NFTsByContractAddressResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      NFTsByContractAddressQueryVariables,
      NFTsByContractAddressQuery
    >(userChain, CodegenEthMainnetWalletNFTsByContractAddressDocument);

    const result = await this.client.query<
      NFTsByContractAddressQueryVariables, // What the user can pass in
      NFTsByContractAddressQuery, // The actual unmodified result from query
      NFTsByContractAddressQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: queryVariables,
    });

    const collection = result?.data?.[userChain]?.collection;
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

    const query = modifyQueryForChain<
      NFTDetailsQuery,
      NFTDetailsQueryVariables
    >(userChain, CodegenEthMainnetNFTDetailsDocument);

    const result = await this.client.query<
      NFTDetailsQueryVariables, // What the user can pass in
      NFTDetailsQuery, // The actual unmodified result from query
      NFTDetailsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query,
      variables: queryVariables,
    });

    const nft = result?.data?.[userChain]?.nft;
    if (nft) return { nft };
    return { nft: null };
  }

  @ValidateInput(nftCollectionDetailsValidator)
  async getCollectionDetails(
    variables: NftCollectionDetailsInput
  ): Promise<NftCollectionDetailsResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;

    const query = modifyQueryForChain<
      NftCollectionDetailsQueryVariables,
      NftCollectionDetailsQuery
    >(userChain, CodegenEthMainnetNftCollectionDetailsDocument);

    const result = await this.client.query<
      NftCollectionDetailsQueryVariables, // What the user can pass in
      NftCollectionDetailsQuery, // The actual unmodified result from query
      NftCollectionDetailsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: queryVariables,
    });

    const collection = result?.data?.[userChain]?.collection;
    if (collection) return { collection };
    return { collection: null };
  }

  @ValidateInput(verifyOwnershipValidator)
  async verifyOwnership(
    variables: VerifyOwnershipByAddressInput
  ): Promise<boolean> {
    const { address, ...allVariables } = variables;
    if (isValidENSAddress(address)) {
      return this.verifyOwnershipByENS({
        ensName: address,
        ...allVariables,
      });
    }

    return this.verifyOwnershipByAddress({
      address,
      ...allVariables,
    });
  }

  private async verifyOwnershipByAddress(
    variables: VerifyOwnershipByAddressInput
  ): Promise<boolean> {
    const { chain, address, nfts } = variables;
    const userChain = chain || this.defaultChain;
    const query = modifyQueryForChain<
      VerifyOwnershipByAddressQueryVariablesType,
      VerifyOwnershipByAddressQueryType
    >(userChain, CodegenEthMainnetVerifyOwnershipByAddressDocument);

    const result = await this.client.query<
      VerifyOwnershipByAddressQueryVariablesType, // What the user can pass in
      VerifyOwnershipByAddressQueryType, // The actual unmodified result from query
      VerifyOwnershipByAddressQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: { address, filter: { contractTokens: nfts } },
    });

    const walletNFTs = result?.data?.[userChain]?.walletByAddress?.walletNFTs;
    return !!walletNFTs?.length;
  }

  private async verifyOwnershipByENS(
    variables: VerifyOwnershipByENSInput
  ): Promise<boolean> {
    const { chain, ensName, nfts } = variables;
    const userChain = chain || this.defaultChain;

    const query = modifyQueryForChain<
      VerifyOwnershipByENSQueryVariablesType,
      VerifyOwnershipByENSQueryType
    >(userChain, CodegenEthMainnetVerifyOwnershipByENSDocument);

    const result = await this.client.query<
      VerifyOwnershipByENSQueryVariablesType, // What the user can pass in
      VerifyOwnershipByENSQueryType, // The actual unmodified result from query
      VerifyOwnershipByENSQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: { ensName, filter: { contractTokens: nfts } },
    });

    const walletByENS = result?.data?.[userChain]?.walletByENS?.walletNFTs;
    return !!walletByENS?.length;
  }
}
