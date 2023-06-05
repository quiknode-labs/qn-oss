import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';
import {
  GasPricesFormattedResult,
  GasPricesQueryResultFull,
  GasPricesQueryVariablesType,
  GasPricesQueryType,
} from '../types/utils/gasPrices';
import {
  CodegenEthMainnetGasPricesDocument,
  CodegenEthSepoliaGasPricesDocument,
  CodegenPolygonMainnetGasPricesDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@urql/core';
import { weiToGwei } from '../utils/helpers';

export class UtilsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  async getGasPrices(
    variables: GasPricesQueryVariablesType & NonQueryInput
  ): Promise<GasPricesFormattedResult> {
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
      GasPricesQueryVariablesType,
      GasPricesQueryType,
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
