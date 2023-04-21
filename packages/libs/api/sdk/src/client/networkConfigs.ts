import { CustomApolloClient } from './customApolloClient';
import { NFTQueries } from '../queries/nft/nftQueries';
import {
  EthMainnetWalletNfTsByEnsQuery,
  EthMainnetWalletNfTsByEnsQueryVariables,
} from '../graphql/types';
import { EthMainnetWalletNFTsByEns } from '../queries/ethereum/mainnet/getNFTsByWalletENS/getNFTsByWalletENS';

interface BaseNetworkConfigArgs {
  customApolloClient: CustomApolloClient;
}

// TODO should this have a base class?
export class EthMainnetNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NFTQueries<
      EthMainnetWalletNfTsByEnsQuery,
      EthMainnetWalletNfTsByEnsQueryVariables
    >(customApolloClient, 'ethereum', {
      WalletNFTsByEns: EthMainnetWalletNFTsByEns,
    });
  }
}
