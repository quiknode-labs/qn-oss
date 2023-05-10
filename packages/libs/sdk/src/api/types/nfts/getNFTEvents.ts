import {
  CodegenEthereumMainnetEventsByNftQuery,
  CodegenEthereumMainnetEventsByNftQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type NFTEventsQueryType = {
  [k in ChainName]: CodegenEthereumMainnetEventsByNftQuery['ethereum'];
};

export type NFTEventsQueryVariablesType =
  CodegenEthereumMainnetEventsByNftQueryVariables;

export interface NFTEventsQueryResultInfo {
  tokenEvents: CodegenTokenEventInfoFragment[];
  tokenEventsPageInfo: CodegenPaginationFragment;
}

export interface NFTEventsQueryResultBody {
  nft: NFTEventsQueryResultInfo;
}

export type NFTEventsQueryResultFull = Record<
  ChainName,
  NFTEventsQueryResultBody
>;

export type NFTEventsFormattedResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
