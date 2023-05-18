import { gql } from '@apollo/client/core/index.js';
import { NftsByContractAddressFragment } from '../../fragments/nftsByContractAddress';

export const PolygonMainnetNFTsByContractAddress = gql`
  query PolygonMainnetNFTsByContractAddress(
    $contractAddress: String!
    $after: String
    $first: Int
  ) {
    polygon {
      ...NftsByContractAddressFragment
    }
  }
  ${NftsByContractAddressFragment}
`;
