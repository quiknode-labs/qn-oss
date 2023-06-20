import { gql } from '@urql/core';
import { WalletByAddressFragment } from '../../../fragments/nftsByWalletAddress';

export const PolygonMainnetWalletNFTsByAddress = gql`
  query PolygonMainnetWalletNFTsByAddress(
    $address: String!
    $before: String
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    polygon {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
