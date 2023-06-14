import {
  CodegenEthereumMainnetEventsGetAllQuery,
  CodegenEthereumMainnetEventsGetAllQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import {
  supportedChainInput,
  tokenEventFilters,
} from '../../../lib/validation/validators';

import { z } from 'zod';

export type AllEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsGetAllQuery['ethereum'];
};

export type AllEventsQueryVariables =
  CodegenEthereumMainnetEventsGetAllQueryVariables;

export const allEventsValidator = z
  .object({
    before: z.string().nullish(),
    after: z.string().nullish(),
    first: z.number().positive().nullish(),
    filter: tokenEventFilters.nullish(),
  })
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

export type AllEventsResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
