import {
  CodegenEthMainnetContractDetailsQueryVariables,
  CodegenEthMainnetContractDetailsQuery,
  CodegenContractInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import {
  isEvmAddress,
  supportedChainInput,
} from '../../../lib/validation/validators';
import { SimplifyType } from '../../../lib/types';
import { z } from 'zod';

export type ContractDetailsQuery = {
  [k in ChainName]: CodegenEthMainnetContractDetailsQuery['ethereum'];
};

export type ContractDetailsQueryVariables =
  CodegenEthMainnetContractDetailsQueryVariables;

// Using zod for runtime validation
export const contractDetailsValidator = z
  .object({
    contractAddress: isEvmAddress,
  })
  .merge(supportedChainInput)
  .strict();

// Infer the type from the zod schema
export type ContractDetailsInput = z.infer<typeof contractDetailsValidator>;

export interface ContractDetailsQueryResultInfo {
  contract: CodegenContractInfoFragment;
}

export type ContractDetailsQueryResultFull = Record<
  ChainName,
  ContractDetailsQueryResultInfo
>;

export type ContractDetailsResult = SimplifyType<{
  contract: CodegenContractInfoFragment | null;
}>;
