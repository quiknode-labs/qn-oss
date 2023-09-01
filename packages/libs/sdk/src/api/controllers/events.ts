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
} from '../graphql/generatedTypes';
import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { DEFAULT_CHAIN } from '../utils/constants';
import { ValidateInput } from '../../lib/validation/ValidateInput';
import { modifyQueryForChain } from '../graphql/modifyQueryForChain';

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
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain(
      userChain,
      CodegenEthereumMainnetEventsByContractDocument
    );

    const result = await this.client.query<
      ContractEventsQueryVariables,
      ContractEventsQuery,
      ContractEventsQueryResultFull
    >({
      query: query,
      variables: queryVariables,
    });

    const contract = result?.data?.[userChain]?.contract;
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
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      CollectionEventsQueryVariables,
      CollectionEventsQuery
    >(userChain, CodegenEthMainnetEventsByCollectionDocument);

    const result = await this.client.query<
      CollectionEventsQueryVariables, // What the user can pass in
      CollectionEventsQuery, // The actual unmodified result from query
      CollectionEventsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: queryVariables,
    });

    const collection = result?.data?.[userChain]?.collection;
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
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<NFTEventsQueryVariables, NFTEventsQuery>(
      userChain,
      CodegenEthereumMainnetEventsByNftDocument
    );
    const result = await this.client.query<
      NFTEventsQueryVariables, // What the user can pass in
      NFTEventsQuery, // The actual unmodified result from query
      NFTEventsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query, // The actual graphql query
      variables: queryVariables,
    });

    const nft = result?.data?.[userChain]?.nft;
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
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<AllEventsQueryVariables, AllEventsQuery>(
      userChain,
      CodegenEthereumMainnetEventsGetAllDocument
    );

    const result = await this.client.query<
      AllEventsQueryVariables,
      AllEventsQuery,
      AllEventsQueryResultFull
    >({
      query: query,
      variables: queryVariables,
    });

    const events = result?.data?.[userChain];
    if (events?.tokenEvents?.length) {
      const formattedResult = formatQueryResult<
        AllEventsQueryResultInfo,
        AllEventsResult
      >(events, 'tokenEvents', 'tokenEventsPageInfo');
      return formattedResult;
    }
    return { results: [], pageInfo: emptyPageInfo };
  }
}
