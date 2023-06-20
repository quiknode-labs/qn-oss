import {
  baseEventsInput,
  isEvmAddress,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthereumMainnetEventsByContractQuery,
  CodegenEthereumMainnetEventsByContractQueryVariables,
  CodegenTokenEventInfoFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

export type ContractEventsQuery = {
  [k in ChainName]: CodegenEthereumMainnetEventsByContractQuery['ethereum'];
};

export type ContractEventsQueryVariables =
  CodegenEthereumMainnetEventsByContractQueryVariables;

export const contractEventsValidator = z
  .object({
    contractAddress: isEvmAddress,
  })
  .merge(baseEventsInput)
  .merge(supportedChainInput)
  .strict();

export type ContractEventsInput = z.infer<typeof contractEventsValidator>;

export interface ContractEventsQueryResultInfo {
  tokenEvents: CodegenTokenEventInfoFragment[];
  tokenEventsPageInfo: CodegenPaginationFragment;
}

export interface ContractEventsQueryResultBody {
  contract: ContractEventsQueryResultInfo;
}

export type ContractEventsQueryResultFull = Record<
  ChainName,
  ContractEventsQueryResultBody
>;

export type ContractEventsResult = {
  results: CodegenTokenEventInfoFragment[];
  pageInfo: CodegenPaginationFragment;
};
