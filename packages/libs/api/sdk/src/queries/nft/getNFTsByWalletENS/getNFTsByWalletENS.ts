import { NftFragment, WalletType } from '../../../graphql/types';
export interface WalletNFTByEns {
  ethereum: {
    walletByENS: WalletType & {
      tokens: NftFragment;
    };
  };
}
