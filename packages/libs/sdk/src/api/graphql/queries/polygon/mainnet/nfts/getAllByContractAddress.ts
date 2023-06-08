import { gql } from '@urql/core';
import { NftsByContractAddressFragment } from '../../../fragments/nftsByContractAddress';

export const PolygonMainnetNFTsByContractAddress = gql`
  query PolygonMainnetNFTsByContractAddress(
    $contractAddress: String!
    $before: String
    $after: String
    $first: Int
  ) {
    polygon {
      ...NftsByContractAddressFragment
    }
  }
  ${NftsByContractAddressFragment}
`;
