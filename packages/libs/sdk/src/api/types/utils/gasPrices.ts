import {
  CodegenEthMainnetGasPricesQueryVariables,
  CodegenEthMainnetGasPricesQuery,
  CodegenGasPrice,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { NonQueryInput } from '../input';

export type GasPricesQuery = {
  [k in ChainName]: CodegenEthMainnetGasPricesQuery['ethereum'];
};

export type GasPricesQueryVariables =
  CodegenEthMainnetGasPricesQueryVariables & { returnInGwei?: boolean };

export type GasPricesInput = GasPricesQueryVariables & NonQueryInput;
export interface GasPricesQueryResultInfo {
  gasPrices: CodegenGasPrice[];
}

export type GasPricesQueryResultFull = Record<
  ChainName,
  GasPricesQueryResultInfo
>;

export type GasPricesResult = {
  gasPrices: CodegenGasPrice[];
};
