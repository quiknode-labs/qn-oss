import { NftFragment, Wallet } from '../../../graphql/types';
export interface WalletNFTByEns {
  ethereum: {
    walletByENS: Wallet & {
      tokens: NftFragment;
    };
  };
}
