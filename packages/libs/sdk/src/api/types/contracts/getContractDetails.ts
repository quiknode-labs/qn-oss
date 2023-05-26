import {
  CodegenEthMainnetContractDetailsQueryVariables,
  CodegenEthMainnetContractDetailsQuery,
  CodegenContractInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type ContractDetailsQueryType = {
  [k in ChainName]: CodegenEthMainnetContractDetailsQuery['ethereum'];
};

export type ContractDetailsQueryVariablesType =
  CodegenEthMainnetContractDetailsQueryVariables;

export interface ContractDetailsQueryResultInfo {
  contract: CodegenContractInfoFragment;
}

export type ContractDetailsQueryResultFull = Record<
  ChainName,
  ContractDetailsQueryResultInfo
>;

export type ContractDetailsFormattedResult = {
  contract: CodegenContractInfoFragment | null;
};
