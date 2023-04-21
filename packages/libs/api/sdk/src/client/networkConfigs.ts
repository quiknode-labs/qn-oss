import { CustomApolloClient } from './customApolloClient';
import { NFTQueries } from '../queries/nft/nftQueries';
import {
  EthMainnetWalletNfTsByEnsQuery,
  EthMainnetWalletNfTsByEnsQueryVariables,
  PolygonMainnetWalletNfTsByEnsQuery,
  PolygonMainnetWalletNfTsByEnsQueryVariables,
} from '../graphql/types';
import { EthMainnetWalletNFTsByEns } from '../queries/ethereum/mainnet/getNFTsByWalletENS';
import { PolygonMainnetWalletNFTsByEns } from '../queries/polygon/mainnet/getNFTsByWalletENS';

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

// write PolygonMainnetNetworkConfig
export class PolygonMainnetNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NFTQueries<
      PolygonMainnetWalletNfTsByEnsQuery,
      PolygonMainnetWalletNfTsByEnsQueryVariables
    >(customApolloClient, 'polygon', {
      WalletNFTsByEns: PolygonMainnetWalletNFTsByEns,
    });
  }
}
