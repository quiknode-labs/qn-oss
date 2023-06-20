import {
  gasPriceFilters,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetGasPricesQueryVariables,
  CodegenEthMainnetGasPricesQuery,
  CodegenGasPrice,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

export type GasPricesQuery = {
  [k in ChainName]: CodegenEthMainnetGasPricesQuery['ethereum'];
};

export type GasPricesQueryVariables = CodegenEthMainnetGasPricesQueryVariables;

export const gasPricesValidator = z
  .object({
    returnInGwei: z.boolean().nullish(),
    filter: gasPriceFilters.nullish(),
  })
  .merge(supportedChainInput)
  .strict();

export type GasPricesInput = z.infer<typeof gasPricesValidator>;

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
