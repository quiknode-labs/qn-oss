import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';
import {
  TransactionsByWalletAddressQueryResultInfo,
  TransactionsByWalletAddressFormattedResult,
  TransactionsByWalletAddressQueryResultFull,
  TransactionsByWalletAddressQueryVariablesType,
  TransactionsByWalletAddressQueryType,
} from '../types/transactions/getByWalletAddress';
import {
  TransactionsByWalletENSQueryResultInfo,
  TransactionsByWalletENSFormattedResult,
  TransactionsByWalletENSQueryResultFull,
  TransactionsByWalletENSQueryVariablesType,
  TransactionsByWalletENSQueryType,
} from '../types/transactions/getByWalletENS';
import {
  TransactionsBySearchQueryResultInfo,
  TransactionsBySearchFormattedResult,
  TransactionsBySearchQueryResultFull,
  TransactionsBySearchQueryVariablesType,
  TransactionsBySearchQueryType,
} from '../types/transactions/getBySearch';
import {
  CodegenEthMainnetTransactionsByWalletAddressDocument,
  CodegenEthMainnetTransactionsByWalletENSDocument,
  CodegenEthMainnetTransactionsBySearchDocument,
  CodegenEthSepoliaTransactionsByWalletAddressDocument,
  CodegenEthSepoliaTransactionsByWalletENSDocument,
  CodegenEthSepoliaTransactionsBySearchDocument,
  CodegenPolygonMainnetTransactionsByWalletAddressDocument,
  CodegenPolygonMainnetTransactionsByWalletENSDocument,
  CodegenPolygonMainnetTransactionsBySearchDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@urql/core';
import { emptyPageInfo } from '../utils/helpers';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { isValidENSAddress } from '../utils/isValidENSAddress';

export class TransactionsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  async getByWallet(
    variables: TransactionsByWalletAddressQueryVariablesType & NonQueryInput
  ): Promise<
    | TransactionsByWalletAddressFormattedResult
    | TransactionsByWalletENSFormattedResult
  > {
    const { address, ...allVariables } = variables;
    let queryResult:
      | TransactionsByWalletAddressQueryResultInfo
      | TransactionsByWalletENSQueryResultInfo;
    if (isValidENSAddress(address)) {
      queryResult = await this.getByWalletENS({
        ensName: address,
        ...allVariables,
      });
    } else {
      queryResult = await this.getByWalletAddress({
        address,
        ...allVariables,
      });
    }

    if (!queryResult?.transactions?.length) {
      // Address can still be valid address, but not have any transactions
      const address = queryResult?.address || '';
      const ensName = queryResult?.ensName || '';
      return {
        address: address,
        ensName: ensName,
        results: [],
        pageInfo: emptyPageInfo,
      };
    }

    const formattedResult = formatQueryResult<
      TransactionsByWalletAddressQueryResultInfo, // this is the same as TransactionsByWalletENSQueryResultInfo
      TransactionsByWalletAddressFormattedResult // this is the same as TransactionsByWalletENSFormattedResult
    >(queryResult, 'transactions', 'transactionsPageInfo');

    return formattedResult;
  }

  private async getByWalletAddress(
    variables: TransactionsByWalletAddressQueryVariablesType & NonQueryInput
  ): Promise<TransactionsByWalletAddressQueryResultInfo> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetTransactionsByWalletAddressDocument,
      polygon: CodegenPolygonMainnetTransactionsByWalletAddressDocument,
      ethereumSepolia: CodegenEthSepoliaTransactionsByWalletAddressDocument,
    };
    const {
      data: {
        [userChain]: { walletByAddress },
      },
    } = await this.client.query<
      TransactionsByWalletAddressQueryVariablesType,
      TransactionsByWalletAddressQueryType,
      TransactionsByWalletAddressQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    return walletByAddress;
  }

  private async getByWalletENS(
    variables: TransactionsByWalletENSQueryVariablesType & NonQueryInput
  ): Promise<TransactionsByWalletENSQueryResultInfo> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetTransactionsByWalletENSDocument,
      polygon: CodegenPolygonMainnetTransactionsByWalletENSDocument,
      ethereumSepolia: CodegenEthSepoliaTransactionsByWalletENSDocument,
    };
    const {
      data: {
        [userChain]: { walletByENS },
      },
    } = await this.client.query<
      TransactionsByWalletENSQueryVariablesType,
      TransactionsByWalletENSQueryType,
      TransactionsByWalletENSQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    return walletByENS;
  }

  async getAll(
    variables: TransactionsBySearchQueryVariablesType & NonQueryInput
  ): Promise<TransactionsBySearchFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetTransactionsBySearchDocument,
      polygon: CodegenPolygonMainnetTransactionsBySearchDocument,
      ethereumSepolia: CodegenEthSepoliaTransactionsBySearchDocument,
    };
    const {
      data: { [userChain]: transactions },
    } = await this.client.query<
      TransactionsBySearchQueryVariablesType,
      TransactionsBySearchQueryType,
      TransactionsBySearchQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    const formattedResult = formatQueryResult<
      TransactionsBySearchQueryResultInfo,
      TransactionsBySearchFormattedResult
    >(transactions, 'transactions', 'transactionsPageInfo');

    return formattedResult;
  }
}
