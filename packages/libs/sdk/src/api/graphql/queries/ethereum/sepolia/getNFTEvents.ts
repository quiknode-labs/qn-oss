import { gql } from '@apollo/client';
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
