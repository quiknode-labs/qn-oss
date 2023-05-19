import { CustomApolloClient } from '../graphql/customApolloClient';
import { ChainName } from '../types/chains';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';
import {
  BalancesByWalletENSQueryResultInfo,
  BalancesByWalletENSFormattedResult,
  BalancesByWalletENSQueryResultFull,
  BalancesByWalletENSQueryVariablesType,
  BalancesByWalletENSQueryType,
} from '../types/tokens/getBalancesByWalletENS';
import {
  CodegenEthMainnetBalancesByWalletENSDocument,
  CodegenEthSepoliaBalancesByWalletENSDocument,
  CodegenPolygonMainnetBalancesByWalletENSDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@apollo/client/core';
import { emptyPageInfo } from '../utils/helpers';
import { formatQueryResult } from '../utils/postQueryFormatter';

export class TokensController {
  constructor(
    private client: CustomApolloClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  async getBalancesByWalletENS(
    variables: BalancesByWalletENSQueryVariablesType & NonQueryInput
  ): Promise<BalancesByWalletENSFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetBalancesByWalletENSDocument,
      polygon: CodegenPolygonMainnetBalancesByWalletENSDocument,
      ethereumSepolia: CodegenEthSepoliaBalancesByWalletENSDocument,
    };

    const {
      data: {
        [userChain]: { walletByENS },
      },
    } = await this.client.query<
      BalancesByWalletENSQueryVariablesType,
      BalancesByWalletENSQueryType,
      BalancesByWalletENSQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    if (!walletByENS?.tokenBalances?.length) {
      return { address: '', ensName: '', results: [], pageInfo: emptyPageInfo };
    }

    // Remove the contract key to flatten the result objects
    const removeContractKey = (
      response: any
    ): BalancesByWalletENSFormattedResult => {
      const modifiedResults = response.results.map((result: any) => {
        const {
          contract: { ...contractInfo },
          ...balanceInfo
        } = result;
        return { ...balanceInfo, ...contractInfo };
      });
      response.results = modifiedResults;
      return response;
    };

    const formattedResult = formatQueryResult<
      BalancesByWalletENSQueryResultInfo,
      BalancesByWalletENSFormattedResult
    >(
      walletByENS,
      'tokenBalances',
      'tokenBalancesPageInfo',
      null,
      removeContractKey
    );

    return formattedResult;
  }
}
