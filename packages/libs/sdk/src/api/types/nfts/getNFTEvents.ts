import {
  baseEventsInput,
  isEvmAddress,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthereumMainnetEventsByNftQuery,
  CodegenEthereumMainnetEventsByNftQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { SimplifyType } from '../../../lib/types';
import { z } from 'zod';

export type NFTEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsByNftQuery['ethereum'];
};

export type NFTEventsQueryVariables =
  CodegenEthereumMainnetEventsByNftQueryVariables;

export const nftEventsValidator = z
  .object({
    contractAddress: isEvmAddress,
    tokenId: z.string(),
  })
  .merge(baseEventsInput)
  .merge(supportedChainInput)
  .strict();

export type NFTEventsInput = z.infer<typeof nftEventsValidator>;

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

export type NFTEventsResult = SimplifyType<{
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
}>;
