import {
  ContractEventsQueryResultInfo,
  ContractEventsFormattedResult,
  ContractEventsQueryResultFull,
  ContractEventsQueryVariablesType,
  ContractEventsQueryType,
} from '../types/events/getByContract';
import {
  CodegenEthereumMainnetEventsByContractDocument,
  CodegenEthereumSepoliaEventsByContractDocument,
  CodegenPolygonMainnetEventsByContractDocument,
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
}
