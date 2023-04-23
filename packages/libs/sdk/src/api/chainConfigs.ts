import { CustomApolloClient } from './graphql/customApolloClient';
import {
  EthMainnetNetworkConfig,
  EthSepoliaNetworkConfig,
  PolygonMainnetNetworkConfig,
} from './networkConfigs';

interface ChainConfigArgs {
  customApolloClient: CustomApolloClient;
}
export class EthMainnetChainConfig {
  readonly mainnet: EthMainnetNetworkConfig;
  readonly sepolia: EthMainnetNetworkConfig;

  constructor({ customApolloClient }: ChainConfigArgs) {
    this.mainnet = new EthMainnetNetworkConfig({ customApolloClient });
    this.sepolia = new EthSepoliaNetworkConfig({ customApolloClient });
  }
}

export class PolygonMainnetChainConfig {
  readonly mainnet: PolygonMainnetNetworkConfig;

  constructor({ customApolloClient }: ChainConfigArgs) {
    this.mainnet = new EthMainnetNetworkConfig({ customApolloClient });
  }
}
