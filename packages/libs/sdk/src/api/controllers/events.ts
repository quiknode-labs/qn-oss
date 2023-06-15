import {
  ContractEventsQueryResultInfo,
  ContractEventsResult,
  ContractEventsQueryResultFull,
  ContractEventsQueryVariables,
  ContractEventsQuery,
  ContractEventsInput,
  contractEventsValidator,
} from '../types/events/getByContract';
import {
  CollectionEventsQueryResultInfo,
  CollectionEventsResult,
  CollectionEventsQueryResultFull,
  CollectionEventsQueryVariables,
  CollectionEventsQuery,
  CollectionEventsInput,
  collectionEventsValidator,
} from '../types/nfts/getCollectionEvents';
import {
  NFTEventsQueryResultInfo,
  NFTEventsResult,
  NFTEventsQueryResultFull,
  NFTEventsQueryVariables,
  NFTEventsQuery,
  NFTEventsInput,
  nftEventsValidator,
} from '../types/nfts/getNFTEvents';
import {
  AllEventsQueryResultInfo,
  AllEventsResult,
  AllEventsQueryResultFull,
  AllEventsQueryVariables,
  AllEventsQuery,
  AllEventsInput,
  allEventsValidator,
} from '../types/events/getAll';
import {
  CodegenEthereumMainnetEventsByContractDocument,
  CodegenEthMainnetEventsByCollectionDocument,
  CodegenEthereumMainnetEventsByNftDocument,
  CodegenEthereumMainnetEventsGetAllDocument,
  CodegenEthereumSepoliaEventsByContractDocument,
  CodegenEthSepoliaEventsByCollectionDocument,
  CodegenEthSepoliaEventsByNftDocument,
  CodegenEthereumSepoliaEventsGetAllDocument,
  CodegenPolygonMainnetEventsByContractDocument,
  CodegenPolygonMainnetEventsByCollectionDocument,
  CodegenPolygonMainnetEventsByNftDocument,
  CodegenPolygonMainnetEventsGetAllDocument,
} from '../graphql/generatedTypes';
import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { TypedDocumentNode } from '@urql/core';
import { DEFAULT_CHAIN } from '../utils/constants';
import { ValidateInput } from '../../lib/validation/ValidateInput';

export class EventsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @ValidateInput(contractEventsValidator)
  async getByContract(
    variables: ContractEventsInput
  ): Promise<ContractEventsResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthereumMainnetEventsByContractDocument,
      polygon: CodegenPolygonMainnetEventsByContractDocument,
      ethereumSepolia: CodegenEthereumSepoliaEventsByContractDocument,
    };

    const {
      data: {
        [userChain]: { contract },
      },
    } = await this.client.query<
      ContractEventsQueryVariables,
      ContractEventsQuery,
      ContractEventsQueryResultFull
    >({
      query: query[userChain],
      variables: queryVariables,
    });

    if (!contract?.tokenEvents?.length) {
      return {
        results: [],
        pageInfo: emptyPageInfo,
      };
    }

    const formattedResult = formatQueryResult<
      ContractEventsQueryResultInfo,
      ContractEventsResult
    >(contract, 'tokenEvents', 'tokenEventsPageInfo');

    return formattedResult;
  }

  @ValidateInput(collectionEventsValidator)
  async getByNFTCollection(
    variables: CollectionEventsInput
  ): Promise<CollectionEventsResult> {
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
      CollectionEventsQueryVariables, // What the user can pass in
      CollectionEventsQuery, // The actual unmodified result from query
      CollectionEventsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!collection?.tokenEvents?.length)
      return { results: [], pageInfo: emptyPageInfo };

    function removeKeyFields(results: any): CollectionEventsResult {
      const { address, ...newResults } = results;
      return newResults;
    }
    const formattedResult = formatQueryResult<
      CollectionEventsQueryResultInfo,
      CollectionEventsResult
    >(collection, 'tokenEvents', 'tokenEventsPageInfo', null, removeKeyFields);

    return formattedResult;
  }

  @ValidateInput(nftEventsValidator)
  async getByNFT(variables: NFTEventsInput): Promise<NFTEventsResult> {
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
      NFTEventsQueryVariables, // What the user can pass in
      NFTEventsQuery, // The actual unmodified result from query
      NFTEventsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!nft?.tokenEvents?.length)
      return { results: [], pageInfo: emptyPageInfo };

    function removeKeyFields(results: any): NFTEventsResult {
      const { contractAddress, tokenId, ...newResults } = results;
      return newResults;
    }

    const formattedResult = formatQueryResult<
      NFTEventsQueryResultInfo,
      NFTEventsResult
    >(nft, 'tokenEvents', 'tokenEventsPageInfo', null, removeKeyFields);

    return formattedResult;
  }

  @ValidateInput(allEventsValidator)
  async getAll(variables: AllEventsInput): Promise<AllEventsResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthereumMainnetEventsGetAllDocument,
      polygon: CodegenPolygonMainnetEventsGetAllDocument,
      ethereumSepolia: CodegenEthereumSepoliaEventsGetAllDocument,
    };

    const {
      data: { [userChain]: tokenEvents },
    } = await this.client.query<
      AllEventsQueryVariables,
      AllEventsQuery,
      AllEventsQueryResultFull
    >({
      query: query[userChain],
      variables: queryVariables,
    });

    const formattedResult = formatQueryResult<
      AllEventsQueryResultInfo,
      AllEventsResult
    >(tokenEvents, 'tokenEvents', 'tokenEventsPageInfo');

    return formattedResult;
  }
}
