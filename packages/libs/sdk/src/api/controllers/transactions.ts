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
} from '../graphql/generatedTypes';
import { emptyPageInfo } from '../utils/helpers';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { isValidENSAddress } from '../utils/isValidENSAddress';
import { ValidateInput } from '../../lib/validation/ValidateInput';
import { balancesByWalletAddressValidator } from '../../api/types/tokens/getBalancesByWalletAddress';
import { modifyQueryForChain } from '../graphql/modifyQueryForChain';

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
    let queryResult: TransactionsByWalletAddressQueryResultInfo | undefined;
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
  ): Promise<TransactionsByWalletAddressQueryResultInfo | undefined> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      TransactionsByWalletAddressQueryVariables,
      TransactionsByWalletAddressQuery
    >(userChain, CodegenEthMainnetTransactionsByWalletAddressDocument);

    const result = await this.client.query<
      TransactionsByWalletAddressQueryVariables,
      TransactionsByWalletAddressQuery,
      TransactionsByWalletAddressQueryResultFull
    >({
      variables: queryVariables,
      query: query,
    });

    const walletByAddress = result?.data?.[userChain]?.walletByAddress;
    return walletByAddress;
  }

  private async getByWalletENS(
    variables: TransactionsByWalletENSInput
  ): Promise<TransactionsByWalletENSQueryResultInfo | undefined> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      TransactionsByWalletENSQueryVariables,
      TransactionsByWalletENSQuery
    >(userChain, CodegenEthMainnetTransactionsByWalletENSDocument);

    const result = await this.client.query<
      TransactionsByWalletENSQueryVariables,
      TransactionsByWalletENSQuery,
      TransactionsByWalletENSQueryResultFull
    >({
      variables: queryVariables,
      query: query,
    });

    const walletByENS = result?.data?.[userChain]?.walletByENS;
    return walletByENS;
  }

  @ValidateInput(transactionsBySearchValidator)
  async getAll(
    variables: TransactionsBySearchInput
  ): Promise<TransactionsBySearchResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      TransactionsBySearchQueryVariables,
      TransactionsBySearchQuery
    >(userChain, CodegenEthMainnetTransactionsBySearchDocument);
    const result = await this.client.query<
      TransactionsBySearchQueryVariables,
      TransactionsBySearchQuery,
      TransactionsBySearchQueryResultFull
    >({
      variables: queryVariables,
      query: query,
    });

    const transactions = result?.data?.[userChain];
    if (transactions && transactions?.transactions?.length > 0) {
      const formattedResult = formatQueryResult<
        TransactionsBySearchQueryResultInfo,
        TransactionsBySearchResult
      >(transactions, 'transactions', 'transactionsPageInfo');
      return formattedResult;
    }

    return {
      results: [],
      pageInfo: emptyPageInfo,
    };
  }

  @ValidateInput(transactionsByHashValidator)
  async getByHash(
    variables: TransactionsByHashInput
  ): Promise<TransactionsByHashResult> {
    const { chain, ...queryVariables } = variables;
    const userChain: ChainName = chain || this.defaultChain;
    const query = modifyQueryForChain<
      TransactionsByHashQueryVariables,
      TransactionsByHashQuery
    >(userChain, CodegenEthMainnetTransactionsByHashDocument);

    const result = await this.client.query<
      TransactionsByHashQueryVariables,
      TransactionsByHashQuery,
      TransactionsByHashQueryResultFull
    >({
      variables: queryVariables,
      query: query,
    });

    const transaction = result?.data?.[userChain];
    if (transaction?.transaction) return transaction;
    return { transaction: null };
  }
}
