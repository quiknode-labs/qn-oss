import { gql } from '@apollo/client/core'; // Using core to not pull in react hooks
import { WalletByAddressFragment } from '../../fragments/nftsByWalletAddress';

export const EthMainnetWalletNFTsByAddress = gql`
  query EthMainnetWalletNFTsByAddress(
    $address: String!
    $after: String
    $first: Int
  ) {
    ethereum {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
