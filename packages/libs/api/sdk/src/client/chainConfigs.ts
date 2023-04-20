import { CustomApolloClient } from './customApolloClient';
import { EthMainnetNetworkConfig } from './networkConfigs';

export class EthMainnetChainConfig {
  readonly mainnet: EthMainnetNetworkConfig;

  constructor({
    customApolloClient,
  }: {
    customApolloClient: CustomApolloClient;
  }) {
    this.mainnet = new EthMainnetNetworkConfig({ customApolloClient });
  }
}
