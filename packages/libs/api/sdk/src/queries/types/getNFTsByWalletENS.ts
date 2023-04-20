import { NftFragment, Wallet } from '../../graphql/types';
export interface WalletNFTByEnsType {
  ethereum: {
    walletByENS: Wallet & {
      tokens: NftFragment;
    };
  };
}
