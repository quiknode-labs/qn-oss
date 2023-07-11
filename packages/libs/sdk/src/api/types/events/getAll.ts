import {
  CodegenEthereumMainnetEventsGetAllQuery,
  CodegenEthereumMainnetEventsGetAllQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import {
  baseEventsInput,
  supportedChainInput,
} from '../../../lib/validation/validators';
import { SimplifyType } from '../../../lib/types';

import { z } from 'zod';

export type AllEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsGetAllQuery['ethereum'];
};

export type AllEventsQueryVariables =
  CodegenEthereumMainnetEventsGetAllQueryVariables;

export const allEventsValidator = baseEventsInput
  .merge(supportedChainInput)
  .strict();

export type AllEventsInput = z.infer<typeof allEventsValidator>;

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

export type AllEventsResult = SimplifyType<{
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
}>;
