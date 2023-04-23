import { OperationVariables, DocumentNode } from '@apollo/client';
import { CustomApolloClient } from '../graphql/customApolloClient';

import {
  WalletByEnsQueryResultInfo,
  WalletNFTsByEnsFormattedResult,
  WalletNFTByEnsQueryResultFull,
} from '../types/getNFTsByWalletENS';
import { ChainName } from '../types/chains';
import { QNApolloErrorHandler } from '../utils/QNApolloErrorHandler';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';

export class NftController<
  WalletNftsByEnsQuery extends Record<string, any>,
  WalletNftsByEnsQueryVariables extends OperationVariables
> {
  constructor(
    private client: CustomApolloClient,
    private chainName: ChainName,
    private queries: {
      WalletNFTsByEns: DocumentNode;
    }
  ) {}

  @QNApolloErrorHandler
  async getAllByWalletENS(
    variables: WalletNftsByEnsQueryVariables
  ): Promise<WalletNFTsByEnsFormattedResult> {
    const { WalletNFTsByEns } = this.queries;
    const {
      data: {
        [this.chainName]: { walletByENS },
      },
    } = await this.client.query<
      WalletNftsByEnsQueryVariables, // What the user can pass in
      WalletNftsByEnsQuery, // The actual unmodified result from query
      WalletNFTByEnsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: WalletNFTsByEns, // The actual graphql query
      variables,
    });
    if (!walletByENS)
      return { address: '', ensName: '', results: [], pageInfo: emptyPageInfo };
    const formattedResult = formatQueryResult<
      WalletByEnsQueryResultInfo,
      WalletNFTsByEnsFormattedResult
    >(walletByENS, 'walletNFTs', 'walletNFTsPageInfo', 'nft');
    return formattedResult;
  }
}
