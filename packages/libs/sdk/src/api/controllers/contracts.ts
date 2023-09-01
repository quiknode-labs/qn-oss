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
import { CodegenEthMainnetContractDetailsDocument } from '../graphql/generatedTypes';
import { ValidateInput } from '../../lib/validation/ValidateInput';
import { modifyQueryForChain } from '../graphql/modifyQueryForChain';

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
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      ContractDetailsQueryVariables,
      ContractDetailsQuery
    >(userChain, CodegenEthMainnetContractDetailsDocument);

    const result = await this.client.query<
      ContractDetailsQueryVariables,
      ContractDetailsQuery,
      ContractDetailsQueryResultFull
    >({
      variables: queryVariables,
      query: query,
    });
    const contract = result?.data?.[userChain]?.contract;
    if (contract) return { contract };
    return { contract: null };
  }
}
