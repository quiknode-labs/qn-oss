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
import {
  CodegenEthMainnetGasPricesDocument,
  CodegenEthSepoliaGasPricesDocument,
  CodegenPolygonMainnetGasPricesDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@urql/core';
import { weiToGwei } from '../utils/helpers';
import { ValidateInput } from '../../lib/validation/ValidateInput';

export class UtilsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @ValidateInput(gasPricesValidator)
  async getGasPrices(variables: GasPricesInput): Promise<GasPricesResult> {
    const { chain, ...queryVariables } = variables;
    const returnInGwei = variables.returnInGwei || false;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetGasPricesDocument,
      polygon: CodegenPolygonMainnetGasPricesDocument,
      ethereumSepolia: CodegenEthSepoliaGasPricesDocument,
    };

    const {
      data: {
        [userChain]: { gasPrices },
      },
    } = await this.client.query<
      GasPricesQueryVariables,
      GasPricesQuery,
      GasPricesQueryResultFull
    >({
      query: query[userChain],
      variables: queryVariables,
    });

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
