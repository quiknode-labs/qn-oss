import { CustomApolloClient } from './customApolloClient';
import {
  EthMainnetNetworkConfig,
  PolygonMainnetNetworkConfig,
} from './networkConfigs';

interface ChainConfigArgs {
  customApolloClient: CustomApolloClient;
}
export class EthMainnetChainConfig {
  readonly mainnet: EthMainnetNetworkConfig;

  constructor({ customApolloClient }: ChainConfigArgs) {
    this.mainnet = new EthMainnetNetworkConfig({ customApolloClient });
  }
}

export class PolygonMainnetChainConfig {
  readonly mainnet: PolygonMainnetNetworkConfig;

  constructor({ customApolloClient }: ChainConfigArgs) {
    this.mainnet = new EthMainnetNetworkConfig({ customApolloClient });
  }
}
