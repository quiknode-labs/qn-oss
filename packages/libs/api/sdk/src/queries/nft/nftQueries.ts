import { CustomApolloClient } from '../../client/customApolloClient';
import {
  getWalletENSNFTsRawQuery,
  WalletENSNFTsQueryVariables,
} from './getNFTsByWalletENS/getNFTsByWalletENS';

export class NFTQueries {
  constructor(private client: CustomApolloClient) {}

  async getNFTsByWalletENS(variables: WalletENSNFTsQueryVariables) {
    return this.client
      .query<WalletENSNFTsQueryVariables>({
        query: getWalletENSNFTsRawQuery,
        variables,
      })

      .catch((error) => {
        console.log(JSON.stringify(error, null, 2));
      });
  }
}
