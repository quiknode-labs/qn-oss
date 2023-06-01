import {
  ContractEventsQueryResultInfo,
  ContractEventsFormattedResult,
  ContractEventsQueryResultFull,
  ContractEventsQueryVariablesType,
  ContractEventsQueryType,
} from '../types/events/getByContract';
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
  CodegenEthereumMainnetEventsByContractDocument,
  CodegenEthMainnetEventsByCollectionDocument,
  CodegenEthereumMainnetEventsByNftDocument,
  CodegenEthereumSepoliaEventsByContractDocument,
  CodegenEthSepoliaEventsByCollectionDocument,
  CodegenEthSepoliaEventsByNftDocument,
  CodegenPolygonMainnetEventsByContractDocument,
  CodegenPolygonMainnetEventsByCollectionDocument,
  CodegenPolygonMainnetEventsByNftDocument,
} from '../graphql/generatedTypes';
import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { TypedDocumentNode } from '@urql/core';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';

export class EventsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  async getByContract(
    variables: ContractEventsQueryVariablesType & NonQueryInput
  ): Promise<ContractEventsFormattedResult> {
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
      ContractEventsQueryVariablesType,
      ContractEventsQueryType,
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
      ContractEventsFormattedResult
    >(contract, 'tokenEvents', 'tokenEventsPageInfo');

    return formattedResult;
  }

  async getByNFTCollection(
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

    function removeKeyFields(results: any): CollectionEventsFormattedResult {
      const { address, ...newResults } = results;
      return newResults;
    }
    const formattedResult = formatQueryResult<
      CollectionEventsQueryResultInfo,
      CollectionEventsFormattedResult
    >(collection, 'tokenEvents', 'tokenEventsPageInfo', null, removeKeyFields);

    return formattedResult;
  }

  async getByNFT(
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

    function removeKeyFields(results: any): NFTEventsFormattedResult {
      const { contractAddress, tokenId, ...newResults } = results;
      return newResults;
    }

    const formattedResult = formatQueryResult<
      NFTEventsQueryResultInfo,
      NFTEventsFormattedResult
    >(nft, 'tokenEvents', 'tokenEventsPageInfo', null, removeKeyFields);

    return formattedResult;
  }
}
