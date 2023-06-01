import { gql } from '@urql/core';
import { NftEventsFragment } from '../../../fragments/EventsByNft';

export const EthSepoliaEventsByNft = gql`
  query EthSepoliaEventsByNft(
    $contractAddress: String!
    $tokenId: String!
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...NftEventsFragment
    }
  }
  ${NftEventsFragment}
`;
