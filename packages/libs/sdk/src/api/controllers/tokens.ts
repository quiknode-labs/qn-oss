import { CustomUrqlClient } from '../graphql/customUrqlClient';
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
  BalancesByWalletAddressQueryResultInfo,
  BalancesByWalletAddressFormattedResult,
  BalancesByWalletAddressQueryResultFull,
  BalancesByWalletAddressQueryVariablesType,
  BalancesByWalletAddressQueryType,
} from '../types/tokens/getBalancesByWalletAddress';
import {
  CodegenEthMainnetBalancesByWalletENSDocument,
  CodegenEthMainnetBalancesByWalletAddressDocument,
  CodegenEthSepoliaBalancesByWalletENSDocument,
  CodegenEthSepoliaBalancesByWalletAddressDocument,
  CodegenPolygonMainnetBalancesByWalletENSDocument,
  CodegenPolygonMainnetBalancesByWalletAddressDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@urql/core';
import { emptyPageInfo } from '../utils/helpers';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { isValidENSAddress } from '../utils/isValidENSAddress';

export class TokensController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  async getBalancesByWallet(
    variables: BalancesByWalletAddressQueryVariablesType & NonQueryInput
  ): Promise<BalancesByWalletENSFormattedResult> {
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
      BalancesByWalletENSFormattedResult
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
    variables: BalancesByWalletAddressQueryVariablesType & NonQueryInput
  ): Promise<BalancesByWalletAddressFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetBalancesByWalletAddressDocument,
      polygon: CodegenPolygonMainnetBalancesByWalletAddressDocument,
      ethereumSepolia: CodegenEthSepoliaBalancesByWalletAddressDocument,
    };

    const result = await this.client.query<
      BalancesByWalletAddressQueryVariablesType,
      BalancesByWalletAddressQueryType,
      BalancesByWalletAddressQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });
    const {
      data: {
        [userChain]: { walletByAddress },
      },
    } = result;
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
      BalancesByWalletAddressFormattedResult
    >(
      walletByAddress,
      'tokenBalances',
      'tokenBalancesPageInfo',
      null,
      this.flattenBalanceResponses // Remove the "contract" key and move info to balance result body
    );

    return formattedResult;
  }

  private flattenBalanceResponses(
    response: any
  ): BalancesByWalletENSFormattedResult {
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
