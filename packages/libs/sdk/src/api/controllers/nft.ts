import { CustomApolloClient } from '../graphql/customApolloClient';

import {
  WalletByEnsQueryResultInfo,
  WalletNFTsByEnsFormattedResult,
  WalletNFTByEnsQueryResultFull,
  WalletNFTsByEnsQueryVariablesType,
  WalletNFTsByEnsQueryType,
} from '../types/nft/getAllByWalletENS';
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
import { DEFAULT_CHAIN } from '../../api/utils/constants';
import { NonQueryInput } from '../../api/types/input';

export class NftController {
  constructor(
    private client: CustomApolloClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @QNApolloErrorHandler
  async getAllByWalletENS(
    variables: WalletNFTsByEnsQueryVariablesType & NonQueryInput
  ): Promise<WalletNFTsByEnsFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetWalletNFTsByEnsDocument,
      polygon: CodegenPolygonMainnetWalletNFTsByEnsDocument,
      ethereumSepolia: CodegenEthSepoliaWalletNFTsByEnsDocument,
    };

    const {
      data: {
        [userChain]: { walletByENS },
      },
    } = await this.client.query<
      WalletNFTsByEnsQueryVariablesType, // What the user can pass in
      WalletNFTsByEnsQueryType, // The actual unmodified result from query
      WalletNFTByEnsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
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
