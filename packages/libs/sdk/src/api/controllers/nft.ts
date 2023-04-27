import { CustomApolloClient } from '../graphql/customApolloClient';

import {
  WalletByEnsQueryResultInfo,
  WalletNFTsByEnsFormattedResult,
  WalletNFTByEnsQueryResultFull,
  WalletNFTsByEnsQueryVariablesType,
  WalletNFTsByEnsQueryType,
} from '../types/getNFTsByWalletENS';
import {
  CodegenEthMainnetWalletNFTsByEnsDocument,
  CodegenEthSepoliaWalletNFTsByEnsDocument,
  CodegenPolygonMainnetWalletNFTsByEnsDocument,
} from '../graphql/generatedTypes';
import { ChainName } from '../types/chains';
import { QNApolloErrorHandler } from '../utils/QNApolloErrorHandler';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { TypedDocumentNode } from '@apollo/client';

export class NftController {
  constructor(
    private client: CustomApolloClient,
    private chainName: ChainName
  ) {}

  @QNApolloErrorHandler
  async getAllByWalletENS(
    variables: WalletNFTsByEnsQueryVariablesType
  ): Promise<WalletNFTsByEnsFormattedResult> {
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetWalletNFTsByEnsDocument,
      polygon: CodegenPolygonMainnetWalletNFTsByEnsDocument,
      ethereumSepolia: CodegenEthSepoliaWalletNFTsByEnsDocument,
    };
    const {
      data: {
        [this.chainName]: { walletByENS },
      },
    } = await this.client.query<
      WalletNFTsByEnsQueryVariablesType, // What the user can pass in
      WalletNFTsByEnsQueryType, // The actual unmodified result from query
      WalletNFTByEnsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query['ethereum'], // The actual graphql query
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
