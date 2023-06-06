import {
  CodegenEthereumMainnetEventsByNftQuery,
  CodegenEthereumMainnetEventsByNftQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type NFTEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsByNftQuery['ethereum'];
};

export type NFTEventsQueryVariables =
  CodegenEthereumMainnetEventsByNftQueryVariables;

export type NFTEventsInput = NFTEventsQueryVariables & NonQueryInput;

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

export type NFTEventsResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
