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
    return this.client
      .query<
        WalletNfTsByEnsQueryVariables,
        WalletNfTsByEnsQuery,
        WalletNFTByEns
      >({
        query: WalletNfTsByEns,
        variables,
      })

      .catch((error) => {
        console.log(JSON.stringify(error, null, 2));
      });
  }
}
