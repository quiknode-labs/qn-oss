import { CustomApolloClient } from './graphql/customApolloClient';
import { NftController } from './controllers/nft';
import {
  CodegenEthMainnetWalletNFTsByEnsQuery,
  CodegenEthMainnetWalletNFTsByEnsQueryVariables,
  CodegenPolygonMainnetWalletNFTsByEnsQuery,
  CodegenPolygonMainnetWalletNFTsByEnsQueryVariables,
  CodegenEthSepoliaWalletNFTsByEnsQuery,
  CodegenEthSepoliaWalletNFTsByEnsQueryVariables,
} from './graphql/generatedTypes';
import { EthMainnetWalletNFTsByEns } from './graphql/queries/ethereum/mainnet/getAllByWalletENS';
import { PolygonMainnetWalletNFTsByEns } from './graphql/queries/polygon/mainnet/getAllByWalletENS';
import { EthSepoliaWalletNFTsByEns } from './graphql/queries/ethereum/sepolia/getAllByWalletENS';

interface BaseNetworkConfigArgs {
  customApolloClient: CustomApolloClient;
}

export class EthMainnetNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NftController<
      CodegenEthMainnetWalletNFTsByEnsQuery,
      CodegenEthMainnetWalletNFTsByEnsQueryVariables
    >(customApolloClient, 'ethereum', {
      WalletNFTsByEns: EthMainnetWalletNFTsByEns,
    });
  }
}

export class EthSepoliaNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NftController<
      CodegenEthSepoliaWalletNFTsByEnsQuery,
      CodegenEthSepoliaWalletNFTsByEnsQueryVariables
    >(customApolloClient, 'ethereumSepolia', {
      WalletNFTsByEns: EthSepoliaWalletNFTsByEns,
    });
  }
}

export class PolygonMainnetNetworkConfig {
  readonly nft;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NftController<
      CodegenPolygonMainnetWalletNFTsByEnsQuery,
      CodegenPolygonMainnetWalletNFTsByEnsQueryVariables
    >(customApolloClient, 'polygon', {
      WalletNFTsByEns: PolygonMainnetWalletNFTsByEns,
    });
  }
}
