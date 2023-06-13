import {
  CodegenEthMainnetContractDetailsQueryVariables,
  CodegenEthMainnetContractDetailsQuery,
  CodegenContractInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName, supportedChainInput } from '../chains';
import { z } from 'zod';

export type ContractDetailsQuery = {
  [k in ChainName]: CodegenEthMainnetContractDetailsQuery['ethereum'];
};

export type ContractDetailsQueryVariables =
  CodegenEthMainnetContractDetailsQueryVariables;

// Using zod for runtime validation
export const contractDetailsInput = z
  .object({
    contractAddress: z.string().startsWith('0x').length(42),
  })
  .merge(supportedChainInput);

// Infer the type from the zod schema
export type ContractDetailsInput = z.infer<typeof contractDetailsInput>;

export interface ContractDetailsQueryResultInfo {
  contract: CodegenContractInfoFragment;
}

export type ContractDetailsQueryResultFull = Record<
  ChainName,
  ContractDetailsQueryResultInfo
>;

export type ContractDetailsResult = {
  contract: CodegenContractInfoFragment | null;
};
