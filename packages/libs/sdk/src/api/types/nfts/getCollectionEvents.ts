import {
  CodegenEthMainnetEventsByCollectionQuery,
  CodegenEthMainnetEventsByCollectionQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type CollectionEventsQueryType = {
  [k in ChainName]: CodegenEthMainnetEventsByCollectionQuery['ethereum'];
};

export type CollectionEventsQueryVariablesType =
  CodegenEthMainnetEventsByCollectionQueryVariables;

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

export type CollectionEventsFormattedResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
