import { gql } from '@apollo/client/core/index.js';
import { NftEventsFragment } from '../../fragments/EventsByNft';

export const EthSepoliaEventsByNft = gql`
  query EthSepoliaEventsByNft(
    $contractAddress: String!
    $tokenId: String!
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...NftEventsFragment
    }
  }
  ${NftEventsFragment}
`;
