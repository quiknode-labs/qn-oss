import { NftFragment, Wallet } from '../../graphql/types';

export type Chain = 'ethereum' | 'polygon';

export interface walletByEnsData {
  walletByENS: Wallet & {
    tokens: NftFragment;
  };
}

export type WalletNFTByEnsType = Record<Chain, walletByEnsData>;
