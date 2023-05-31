import {
  CodegenEthereumMainnetEventsByContractQuery,
  CodegenEthereumMainnetEventsByContractQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type ContractEventsQueryType = {
  [k in ChainName]: CodegenEthereumMainnetEventsByContractQuery['ethereum'];
};

export type ContractEventsQueryVariablesType =
  CodegenEthereumMainnetEventsByContractQueryVariables;

export interface ContractEventsQueryResultInfo {
  tokenEvents: CodegenTokenEventInfoFragment[];
  tokenEventsPageInfo: CodegenPaginationFragment;
}

export interface ContractEventsQueryResultBody {
  contract: ContractEventsQueryResultInfo;
}

export type ContractEventsQueryResultFull = Record<
  ChainName,
  ContractEventsQueryResultBody
>;

export type ContractEventsFormattedResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
