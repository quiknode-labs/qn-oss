import { CustomApolloClient } from '../graphql/customApolloClient';

import {
  WalletNFTsByEnsQueryResultInfo,
  WalletNFTsByEnsFormattedResult,
  WalletNFTsByEnsQueryResultFull,
  WalletNFTsByEnsQueryVariablesType,
  WalletNFTsByEnsQueryType,
} from '../types/nfts/getByWalletENS';
import {
  WalletNFTsByAddressQueryResultInfo,
  WalletNFTsByAddressFormattedResult,
  WalletNFTByAddressQueryResultFull,
  WalletNFTsByAddressQueryVariablesType,
  WalletNFTsByAddressQueryType,
} from '../types/nfts/getByWalletAddress';
import {
  CodegenEthMainnetWalletNFTsByAddressDocument,
  CodegenEthMainnetWalletNFTsByEnsDocument,
  CodegenEthSepoliaWalletNFTsByAddressDocument,
  CodegenEthSepoliaWalletNFTsByEnsDocument,
  CodegenPolygonMainnetWalletNFTsByAddressDocument,
  CodegenPolygonMainnetWalletNFTsByEnsDocument,
} from '../graphql/generatedTypes';
import { ChainName } from '../types/chains';
import { QNApolloErrorHandler } from '../utils/QNApolloErrorHandler';
import { formatQueryResult } from '../utils/postQueryFormatter';
import { emptyPageInfo } from '../utils/helpers';
import { TypedDocumentNode } from '@apollo/client/core'; // Using core to not pull in react hooks
import { DEFAULT_CHAIN } from '../utils/constants';
import { NonQueryInput } from '../types/input';

export class NftsController {
  constructor(
    private client: CustomApolloClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}

  @QNApolloErrorHandler
  async getByWalletENS(
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
      WalletNFTsByEnsQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!walletByENS?.walletNFTs?.length)
      return { address: '', ensName: '', results: [], pageInfo: emptyPageInfo };

    const formattedResult = formatQueryResult<
      WalletNFTsByEnsQueryResultInfo,
      WalletNFTsByEnsFormattedResult
    >(walletByENS, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }

  @QNApolloErrorHandler
  async getByWalletAddress(
    variables: WalletNFTsByAddressQueryVariablesType & NonQueryInput
  ): Promise<WalletNFTsByAddressFormattedResult> {
    const { chain, ...queryVariables } = variables;
    const userChain = chain || this.defaultChain;
    const query: Record<ChainName, TypedDocumentNode<any, any>> = {
      ethereum: CodegenEthMainnetWalletNFTsByAddressDocument,
      polygon: CodegenPolygonMainnetWalletNFTsByAddressDocument,
      ethereumSepolia: CodegenEthSepoliaWalletNFTsByAddressDocument,
    };

    const {
      data: {
        [userChain]: { walletByAddress },
      },
    } = await this.client.query<
      WalletNFTsByAddressQueryVariablesType, // What the user can pass in
      WalletNFTsByAddressQueryType, // The actual unmodified result from query
      WalletNFTByAddressQueryResultFull // the modified result (edges and nodes removed)
    >({
      query: query[userChain], // The actual graphql query
      variables: queryVariables,
    });

    if (!walletByAddress?.walletNFTs?.length) {
      return { address: '', ensName: '', results: [], pageInfo: emptyPageInfo };
    }

    const formattedResult = formatQueryResult<
      WalletNFTsByAddressQueryResultInfo,
      WalletNFTsByAddressFormattedResult
    >(walletByAddress, 'walletNFTs', 'walletNFTsPageInfo', 'nft');

    return formattedResult;
  }
}
