import {
  CodegenEthereumMainnetEventsGetAllQuery,
  CodegenEthereumMainnetEventsGetAllQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName, supportedChainInput } from '../chains';
import { z } from 'zod';

export type AllEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsGetAllQuery['ethereum'];
};

export type AllEventsQueryVariables =
  CodegenEthereumMainnetEventsGetAllQueryVariables;

export const allEventsValidator = z
  .object({
    before: z.string().optional(),
    after: z.string().optional(),
    first: z.string().optional(),
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
