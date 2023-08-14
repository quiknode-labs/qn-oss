import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { DEFAULT_CHAIN } from '../utils/constants';
import {
  GasPricesResult,
  GasPricesQueryResultFull,
  GasPricesQueryVariables,
  GasPricesQuery,
  GasPricesInput,
  gasPricesValidator,
} from '../types/utils/gasPrices';
import { CodegenEthMainnetGasPricesDocument } from '../graphql/generatedTypes';
import { weiToGwei } from '../utils/helpers';
import { ValidateInput } from '../../lib/validation/ValidateInput';
import { modifyQueryForChain } from '../graphql/modifyQueryForChain';

export class UtilsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @ValidateInput(gasPricesValidator)
  async getGasPrices(variables: GasPricesInput): Promise<GasPricesResult> {
    const { chain, ...queryVariables } = variables;
    const returnInGwei = variables.returnInGwei || false;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain(
      userChain,
      CodegenEthMainnetGasPricesDocument
    );

    const result = await this.client.query<
      GasPricesQueryVariables,
      GasPricesQuery,
      GasPricesQueryResultFull
    >({
      query: query,
      variables: queryVariables,
    });

    const gasPrices = result?.data?.[userChain]?.gasPrices;
    if (Array.isArray(gasPrices) && gasPrices.length > 0) {
      if (returnInGwei) {
        const fieldsToTransform = [
          'total',
          'average',
          'ceiling',
          'floor',
          'median',
        ];
        const modifiedGasPrices = gasPrices.map((gasPrice: any) => {
          fieldsToTransform.map((field) => {
            gasPrice[field] = weiToGwei(gasPrice[field]);
          });
          return gasPrice;
        });

        return { gasPrices: modifiedGasPrices };
      }

      return { gasPrices };
    }
    return { gasPrices: [] };
  }
}
