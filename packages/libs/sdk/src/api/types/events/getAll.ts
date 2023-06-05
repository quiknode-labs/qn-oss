import {
  CodegenEthereumMainnetEventsGetAllQuery,
  CodegenEthereumMainnetEventsGetAllQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type AllEventsQueryType = {
  [k in ChainName]: CodegenEthereumMainnetEventsGetAllQuery['ethereum'];
};

export type AllEventsQueryVariablesType =
  CodegenEthereumMainnetEventsGetAllQueryVariables;

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

export type AllEventsFormattedResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
