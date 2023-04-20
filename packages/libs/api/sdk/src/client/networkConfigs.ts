import { CustomApolloClient } from './customApolloClient';
import { NFTQueries } from '../queries/nft/nftQueries';

interface BaseNetworkConfigArgs {
  customApolloClient: CustomApolloClient;
}

// TODO should this have a base class?
export class EthMainnetNetworkConfig {
  readonly nft: NFTQueries;

  constructor({ customApolloClient }: BaseNetworkConfigArgs) {
    this.nft = new NFTQueries(customApolloClient);
  }
}
