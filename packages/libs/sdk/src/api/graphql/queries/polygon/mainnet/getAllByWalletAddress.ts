import { gql } from '@apollo/client/core';
import { WalletByAddressFragment } from '../../fragments/nftsByWalletAddress';

export const PolygonMainnetWalletNFTsByAddress = gql`
  query PolygonMainnetWalletNFTsByAddress(
    $address: String!
    $after: String
    $first: Int
  ) {
    polygon {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
