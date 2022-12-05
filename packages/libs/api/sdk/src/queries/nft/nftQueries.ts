import { CustomApolloClient } from '../../client/customApolloClient';
import {
  WalletNfTsByEns,
  WalletNfTsByEnsQuery,
  WalletNfTsByEnsQueryVariables,
} from '../../graphql/types';
import { WalletNFTByEns } from './getNFTsByWalletENS/getNFTsByWalletENS';

export class NFTQueries {
  constructor(private client: CustomApolloClient) {}

  async getNFTsByWalletENS(variables: WalletNfTsByEnsQueryVariables) {
    const {
      data: { ethereum: data },
    } = await this.client.query<
      WalletNfTsByEnsQueryVariables, // What the user can pass in
      WalletNfTsByEnsQuery, // The actual unmodified result from query
      WalletNFTByEns // the modified result (edges and nodes removed)
    >({
      query: WalletNfTsByEns, // The actual graphql query
      variables,
    });

    return data;
  }
}
