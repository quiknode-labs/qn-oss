import {
  CodegenEthereumMainnetEventsByContractQuery,
  CodegenEthereumMainnetEventsByContractQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type ContractEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsByContractQuery['ethereum'];
};

export type ContractEventsQueryVariables =
  CodegenEthereumMainnetEventsByContractQueryVariables;

export type ContractEventsInput = ContractEventsQueryVariables & NonQueryInput;

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

export type ContractEventsResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
