import { gql } from '@urql/core';
import { NftEventsFragment } from '../../../fragments/EventsByNft';

export const PolygonMainnetEventsByNft = gql`
  query PolygonMainnetEventsByNft(
    $contractAddress: String!
    $tokenId: String!
    $filter: TokenEventsFilterInput
    $before: String
    $after: String
    $first: Int
  ) {
    polygon {
      ...NftEventsFragment
    }
  }
  ${NftEventsFragment}
`;
