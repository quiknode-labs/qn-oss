import {
  CodegenEthereumMainnetEventsGetAllQuery,
  CodegenEthereumMainnetEventsGetAllQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type AllEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsGetAllQuery['ethereum'];
};

export type AllEventsQueryVariables =
  CodegenEthereumMainnetEventsGetAllQueryVariables;

export type AllEventsInput = AllEventsQueryVariables & NonQueryInput;

export interface AllEventsQueryResultInfo {
  tokenEvents: CodegenTokenEventInfoFragment[];
  tokenEventsPageInfo: CodegenPaginationFragment;
}

export interface AllEventsQueryResultBody {
  contract: AllEventsQueryResultInfo;
}

export type AllEventsQueryResultFull = Record<
  ChainName,
  AllEventsQueryResultBody
>;

export type AllEventsResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
