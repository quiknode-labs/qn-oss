import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { DEFAULT_CHAIN } from '../utils/constants';
import {
  BalancesByWalletENSQueryResultInfo,
  BalancesByWalletENSResult,
  BalancesByWalletENSQueryResultFull,
  BalancesByWalletENSQueryVariables,
  BalancesByWalletENSQuery,
  BalancesByWalletENSInput,
} from '../types/tokens/getBalancesByWalletENS';
import {
  BalancesByWalletAddressQueryResultInfo,
  BalancesByWalletAddressResult,
  BalancesByWalletAddressQueryResultFull,
  BalancesByWalletAddressQueryVariables,
  BalancesByWalletAddressQuery,
  BalancesByWalletAddressInput,
  balancesByWalletAddressValidator,
} from '../types/tokens/getBalancesByWalletAddress';
import {
  CodegenEthMainnetBalancesByWalletENSDocument,
  CodegenEthMainnetBalancesByWalletAddressDocument,
} from '../graphql/generatedTypes';
import { emptyPageInfo } from '../utils/helpers';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { isValidENSAddress } from '../utils/isValidENSAddress';
import { ValidateInput } from '../../lib/validation/ValidateInput';
import { modifyQueryForChain } from '../graphql/modifyQueryForChain';

export class TokensController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @ValidateInput(balancesByWalletAddressValidator)
  async getBalancesByWallet(
    variables: BalancesByWalletAddressInput
  ): Promise<BalancesByWalletENSResult> {
    const { address, ...allVariables } = variables;
    if (isValidENSAddress(address)) {
      return this.getBalancesByWalletENS({
        ensName: address,
        ...allVariables,
      });
    }
    return this.getBalancesByWalletAddress({
      address,
      ...allVariables,
    });
  }

  private async getBalancesByWalletENS(
    variables: BalancesByWalletENSInput
  ): Promise<BalancesByWalletENSResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      BalancesByWalletENSQueryVariables,
      BalancesByWalletENSQuery
    >(userChain, CodegenEthMainnetBalancesByWalletENSDocument);

    const result = await this.client.query<
      BalancesByWalletENSQueryVariables,
      BalancesByWalletENSQuery,
      BalancesByWalletENSQueryResultFull
    >({
      variables: queryVariables,
      query: query,
    });

    const walletByENS = result?.data?.[userChain]?.walletByENS;
    if (!walletByENS?.tokenBalances?.length) {
      // Address can still be valid ENS name, but not have any balances
      const address = walletByENS?.address || '';
      const ensName = walletByENS?.ensName || '';
      return {
        address: address,
        ensName: ensName,
        results: [],
        pageInfo: emptyPageInfo,
      };
    }

    const formattedResult = formatQueryResult<
      BalancesByWalletENSQueryResultInfo,
      BalancesByWalletENSResult
    >(
      walletByENS,
      'tokenBalances',
      'tokenBalancesPageInfo',
      null,
      this.flattenBalanceResponses // Remove the "contract" key and move info to balance result body
    );

    return formattedResult;
  }

  private async getBalancesByWalletAddress(
    variables: BalancesByWalletAddressInput
  ): Promise<BalancesByWalletAddressResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      BalancesByWalletAddressQueryVariables,
      BalancesByWalletAddressQuery
    >(userChain, CodegenEthMainnetBalancesByWalletAddressDocument);

    const result = await this.client.query<
      BalancesByWalletAddressQueryVariables,
      BalancesByWalletAddressQuery,
      BalancesByWalletAddressQueryResultFull
    >({
      variables: queryVariables,
      query: query,
    });

    const walletByAddress = result?.data?.[userChain]?.walletByAddress;
    if (!walletByAddress?.tokenBalances?.length) {
      // Address can still be valid address, but not have any balances
      const address = walletByAddress?.address || '';
      const ensName = walletByAddress?.ensName || '';
      return {
        address: address,
        ensName: ensName,
        results: [],
        pageInfo: emptyPageInfo,
      };
    }

    const formattedResult = formatQueryResult<
      BalancesByWalletAddressQueryResultInfo,
      BalancesByWalletAddressResult
    >(
      walletByAddress,
      'tokenBalances',
      'tokenBalancesPageInfo',
      null,
      this.flattenBalanceResponses // Remove the "contract" key and move info to balance result body
    );

    return formattedResult;
  }

  private flattenBalanceResponses(response: any): BalancesByWalletENSResult {
    const modifiedResults = response.results.map((result: any) => {
      const {
        contract: { ...contractInfo },
        ...balanceInfo
      } = result;
      return { ...balanceInfo, ...contractInfo };
    });
    response.results = modifiedResults;
    return response;
  }
}
