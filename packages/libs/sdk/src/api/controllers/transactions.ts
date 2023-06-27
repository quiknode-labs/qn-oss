import { CustomUrqlClient } from '../graphql/customUrqlClient';
import { ChainName } from '../types/chains';
import { DEFAULT_CHAIN } from '../utils/constants';
import {
  TransactionsByWalletAddressQueryResultInfo,
  TransactionsByWalletAddressResult,
  TransactionsByWalletAddressQueryResultFull,
  TransactionsByWalletAddressQueryVariables,
  TransactionsByWalletAddressQuery,
  TransactionsByWalletAddressInput,
} from '../types/transactions/getByWalletAddress';
import {
  TransactionsByWalletENSQueryResultInfo,
  TransactionsByWalletENSQueryResultFull,
  TransactionsByWalletENSQueryVariables,
  TransactionsByWalletENSQuery,
  TransactionsByWalletENSInput,
} from '../types/transactions/getByWalletENS';
import {
  TransactionsBySearchQueryResultInfo,
  TransactionsBySearchResult,
  TransactionsBySearchQueryResultFull,
  TransactionsBySearchQueryVariables,
  TransactionsBySearchQuery,
  TransactionsBySearchInput,
  transactionsBySearchValidator,
} from '../types/transactions/getBySearch';
import {
  TransactionsByHashResult,
  TransactionsByHashQueryResultFull,
  TransactionsByHashQueryVariables,
  TransactionsByHashQuery,
  TransactionsByHashInput,
  transactionsByHashValidator,
} from '../types/transactions/getByHash';
import {
  CodegenEthMainnetTransactionsByWalletAddressDocument,
  CodegenEthMainnetTransactionsByWalletENSDocument,
  CodegenEthMainnetTransactionsBySearchDocument,
  CodegenEthMainnetTransactionsByHashDocument,
  CodegenEthSepoliaTransactionsByWalletAddressDocument,
  CodegenEthSepoliaTransactionsByWalletENSDocument,
  CodegenEthSepoliaTransactionsBySearchDocument,
  CodegenEthSepoliaTransactionsByHashDocument,
  CodegenPolygonMainnetTransactionsByWalletAddressDocument,
  CodegenPolygonMainnetTransactionsByWalletENSDocument,
  CodegenPolygonMainnetTransactionsBySearchDocument,
  CodegenPolygonMainnetTransactionsByHashDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@urql/core';
import { emptyPageInfo } from '../utils/helpers';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { isValidENSAddress } from '../utils/isValidENSAddress';
import { ValidateInput } from '../../lib/validation/ValidateInput';
import { balancesByWalletAddressValidator } from '../../api/types/tokens/getBalancesByWalletAddress';

export class TransactionsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @ValidateInput(balancesByWalletAddressValidator)
  async getByWallet(
    variables: TransactionsByWalletAddressInput
  ): Promise<TransactionsByWalletAddressResult> {
    const { address, ...allVariables } = variables;
    let queryResult: TransactionsByWalletAddressQueryResultInfo;
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
      TransactionsByWalletAddressResult // this is the same as TransactionsByWalletENSResult
    >(queryResult, 'transactions', 'transactionsPageInfo');

    return formattedResult;
  }

  private async getByWalletAddress(
    variables: TransactionsByWalletAddressInput
  ): Promise<TransactionsByWalletAddressQueryResultInfo> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
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
      TransactionsByWalletAddressQueryVariables,
      TransactionsByWalletAddressQuery,
      TransactionsByWalletAddressQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    return walletByAddress;
  }

  private async getByWalletENS(
    variables: TransactionsByWalletENSInput
  ): Promise<TransactionsByWalletENSQueryResultInfo> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
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
      TransactionsByWalletENSQueryVariables,
      TransactionsByWalletENSQuery,
      TransactionsByWalletENSQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    return walletByENS;
  }

  @ValidateInput(transactionsBySearchValidator)
  async getAll(
    variables: TransactionsBySearchInput
  ): Promise<TransactionsBySearchResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetTransactionsBySearchDocument,
      polygon: CodegenPolygonMainnetTransactionsBySearchDocument,
      ethereumSepolia: CodegenEthSepoliaTransactionsBySearchDocument,
    };
    const {
      data: { [userChain]: transactions },
    } = await this.client.query<
      TransactionsBySearchQueryVariables,
      TransactionsBySearchQuery,
      TransactionsBySearchQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    const formattedResult = formatQueryResult<
      TransactionsBySearchQueryResultInfo,
      TransactionsBySearchResult
    >(transactions, 'transactions', 'transactionsPageInfo');

    return formattedResult;
  }

  @ValidateInput(transactionsByHashValidator)
  async getByHash(
    variables: TransactionsByHashInput
  ): Promise<TransactionsByHashResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetTransactionsByHashDocument,
      polygon: CodegenPolygonMainnetTransactionsByHashDocument,
      ethereumSepolia: CodegenEthSepoliaTransactionsByHashDocument,
    };

    const {
      data: { [userChain]: transaction },
    } = await this.client.query<
      TransactionsByHashQueryVariables,
      TransactionsByHashQuery,
      TransactionsByHashQueryResultFull
    >({
      variables: queryVariables,
      query: query[userChain],
    });

    if (transaction?.transaction) return transaction;
    return { transaction: null };
  }
}
