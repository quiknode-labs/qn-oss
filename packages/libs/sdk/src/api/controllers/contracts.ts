import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { DEFAULT_CHAIN } from '../utils/constants';
import {
  ContractDetailsResult,
  ContractDetailsQueryResultFull,
  ContractDetailsQueryVariables,
  ContractDetailsQuery,
  ContractDetailsInput,
  contractDetailsValidator,
} from '../types/contracts/getContractDetails';
import {
  CodegenEthMainnetContractDetailsDocument,
  CodegenEthSepoliaContractDetailsDocument,
  CodegenPolygonMainnetContractDetailsDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@urql/core';
import { ValidateInput } from '../../lib/validation/ValidateInput';

export class ContractsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @ValidateInput(contractDetailsValidator)
  async getDetails(
    variables: ContractDetailsInput
  ): Promise<ContractDetailsResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetContractDetailsDocument,
      polygon: CodegenPolygonMainnetContractDetailsDocument,
      ethereumSepolia: CodegenEthSepoliaContractDetailsDocument,
    };

    const {
      data: {
        [userChain]: { contract },
      },
    } = await this.client.query<
      ContractDetailsQueryVariables,
      ContractDetailsQuery,
      ContractDetailsQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });
    if (contract) return { contract };
    return { contract: null };
  }
}
