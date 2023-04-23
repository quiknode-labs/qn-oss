import { CustomApolloClient } from './graphql/customApolloClient';
import { NftController } from './controllers/nft';
import {
  EthMainnetWalletNfTsByEnsQuery,
  EthMainnetWalletNfTsByEnsQueryVariables,
  PolygonMainnetWalletNfTsByEnsQuery,
  PolygonMainnetWalletNfTsByEnsQueryVariables,
  EthSepoliaWalletNfTsByEnsQuery,
  EthSepoliaWalletNfTsByEnsQueryVariables,
} from './graphql/generatedTypes';
import { EthMainnetWalletNFTsByEns } from './graphql/queries/ethereum/mainnet/getNFTsByWalletENS';
import { PolygonMainnetWalletNFTsByEns } from './graphql/queries/polygon/mainnet/getNFTsByWalletENS';
import { EthSepoliaWalletNFTsByEns } from './graphql/queries/ethereum/sepolia/getNFTsByWalletENS';

interface BaseNetworkConfigArgs {
  customApolloClient: CustomApolloClient;
}

export class EthMainnetNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NftController<
      EthMainnetWalletNfTsByEnsQuery,
      EthMainnetWalletNfTsByEnsQueryVariables
    >(customApolloClient, 'ethereum', {
      WalletNFTsByEns: EthMainnetWalletNFTsByEns,
    });
  }
}

export class EthSepoliaNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NftController<
      EthSepoliaWalletNfTsByEnsQuery,
      EthSepoliaWalletNfTsByEnsQueryVariables
    >(customApolloClient, 'ethereumSepolia', {
      WalletNFTsByEns: EthSepoliaWalletNFTsByEns,
    });
  }
}

export class PolygonMainnetNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NftController<
      PolygonMainnetWalletNfTsByEnsQuery,
      PolygonMainnetWalletNfTsByEnsQueryVariables
    >(customApolloClient, 'polygon', {
      WalletNFTsByEns: PolygonMainnetWalletNFTsByEns,
    });
  }
}
