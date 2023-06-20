import {
  CodegenEthMainnetEventsByCollectionQuery,
  CodegenEthMainnetEventsByCollectionQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import {
  baseEventsInput,
  isEvmAddress,
  supportedChainInput,
} from '../../../lib/validation/validators';
import { z } from 'zod';

export type CollectionEventsQuery = {
  [k in ChainName]: CodegenEthMainnetEventsByCollectionQuery['ethereum'];
};

export type CollectionEventsQueryVariables =
  CodegenEthMainnetEventsByCollectionQueryVariables;

export const collectionEventsValidator = z
  .object({
    contractAddress: isEvmAddress,
  })
  .merge(baseEventsInput)
  .merge(supportedChainInput)
  .strict();

export type CollectionEventsInput = z.infer<typeof collectionEventsValidator>;
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
