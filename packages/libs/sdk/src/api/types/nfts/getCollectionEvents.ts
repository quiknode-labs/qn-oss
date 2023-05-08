import {
  CodegenEthMainnetEventsByCollectionQuery,
  CodegenEthMainnetEventsByCollectionQueryVariables,
  CodegenCollectionEventsFragmentFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type CollectionEventsQueryType = {
  [k in ChainName]: CodegenEthMainnetEventsByCollectionQuery['ethereum'];
};

export type CollectionEventsQueryVariablesType =
  CodegenEthMainnetEventsByCollectionQueryVariables;

export interface CollectionEventsQueryResultInfo {
  tokenEvents: CodegenCollectionEventsFragmentFragment[];
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
  results: CodegenCollectionEventsFragmentFragment[];
  pageInfo: CodegenPaginationFragment;
};
