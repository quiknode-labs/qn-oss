import {
  CodegenEthMainnetEventsByCollectionQuery,
  CodegenEthMainnetEventsByCollectionQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type CollectionEventsQuery = {
  [k in ChainName]: CodegenEthMainnetEventsByCollectionQuery['ethereum'];
};

export type CollectionEventsQueryVariables =
  CodegenEthMainnetEventsByCollectionQueryVariables;

export type CollectionEventsInput = CollectionEventsQueryVariables &
  NonQueryInput;

export interface CollectionEventsQueryResultInfo {
  tokenEvents: CodegenTokenEventInfoFragment[];
  tokenEventsPageInfo: CodegenPaginationFragment;
}

export interface CollectionEventsQueryResultBody {
  collection: CollectionEventsQueryResultInfo;
}

export type CollectionEventsQueryResultFull = Record<
  ChainName,
  CollectionEventsQueryResultBody
>;

export type CollectionEventsResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
