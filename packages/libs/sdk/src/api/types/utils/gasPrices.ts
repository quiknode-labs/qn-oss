import {
  CodegenEthMainnetGasPricesQueryVariables,
  CodegenEthMainnetGasPricesQuery,
  CodegenGasPrice,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type GasPricesQueryType = {
  [k in ChainName]: CodegenEthMainnetGasPricesQuery['ethereum'];
};

export type GasPricesQueryVariablesType =
  CodegenEthMainnetGasPricesQueryVariables;

export interface GasPricesQueryResultInfo {
  gasPrices: CodegenGasPrice[];
}

export type GasPricesQueryResultFull = Record<
  ChainName,
  GasPricesQueryResultInfo
>;

export type GasPricesFormattedResult = {
  gasPrices: CodegenGasPrice[] | null;
};
