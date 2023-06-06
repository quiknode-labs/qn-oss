import {
  CodegenEthMainnetContractDetailsQueryVariables,
  CodegenEthMainnetContractDetailsQuery,
  CodegenContractInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type ContractDetailsQuery = {
  [k in ChainName]: CodegenEthMainnetContractDetailsQuery['ethereum'];
};

export type ContractDetailsQueryVariables =
  CodegenEthMainnetContractDetailsQueryVariables;

export type ContractDetailsInput = ContractDetailsQueryVariables &
  NonQueryInput;

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
