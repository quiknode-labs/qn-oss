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
  CodegenEthMainnetTransactionsByWalletAddressDocument,
  CodegenEthSepoliaTransactionsByWalletAddressDocument,
  CodegenPolygonMainnetTransactionsByWalletAddressDocument,
} from '../graphql/generatedTypes';
import { TypedDocumentNode } from '@urql/core';
import { emptyPageInfo } from '../utils/helpers';
import { formatQueryResult } from '../utils/postQueryFormatter';

export class TransactionsController {
  constructor(
    private client: CustomUrqlClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  async getByWalletAddress(
    variables: TransactionsByWalletAddressQueryVariablesType & NonQueryInput
  ): Promise<TransactionsByWalletAddressFormattedResult> {
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

    if (!walletByAddress?.transactions?.length) {
      // Address can still be valid address, but not have any transactions
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
      TransactionsByWalletAddressQueryResultInfo,
      TransactionsByWalletAddressFormattedResult
    >(walletByAddress, 'walletTransactions', 'walletTransactionsPageInfo');

    return formattedResult;
  }
}
