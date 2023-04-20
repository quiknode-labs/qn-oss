import { ApolloError } from '@apollo/client';
import { CustomApolloClient } from '../../client/customApolloClient';
import { importSchema } from 'graphql-import'
import {
  EthMainnet
} from ;

import { WalletNFTByEnsType } from '../types/getNFTsByWalletENS';
import {
  PolygonMainnetWalletNfTsByEnsQuery,
  PolygonMainnetWalletNfTsByEnsQueryVariables,
} from '../../graphql/types';
const e = importSchema('../ethereum/mainnet/getNFTsByWalletENS/getNFTsByWalletENS.gql')

export class NFTQueries {
  constructor(private client: CustomApolloClient) {}

  async getNFTsByWalletENS(variables: PolygonMainnetWalletNfTsByEnsQueryVariables) {
    try {
      const {
        data: { ethereum: data },
      } = await this.client.query<
        PolygonMainnetWalletNfTsByEnsQueryVariables, // What the user can pass in
        PolygonMainnetWalletNfTsByEnsQuery, // The actual unmodified result from query
        WalletNFTByEnsType // the modified result (edges and nodes removed)
      >({
        query: EthereumMainnetGetWalletENSNFTs, // The actual graphql query
        variables,
      });
      return data;
    } catch (error: unknown) {
      // TODO: handle catching errors better, might be good to have  "Debug" mode for development that shows the error, otherwise
      // spit out a "something went wrong" with a link to file issues since the user shouldn't ever hit GQL validation errors
      if (error instanceof ApolloError) {
        const apolloErr = error as ApolloError;
        console.error(apolloErr.message);
        console.error(JSON.stringify(error, null, 2));
      } else {
        console.error(error);
      }
      return null;
    }
  }
}
