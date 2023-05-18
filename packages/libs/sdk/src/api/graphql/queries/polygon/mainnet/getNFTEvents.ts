import { gql } from '@apollo/client/core/index.js';
import { NftEventsFragment } from '../../fragments/EventsByNft';

export const PolygonMainnetEventsByNft = gql`
  query PolygonMainnetEventsByNft(
    $contractAddress: String!
    $tokenId: String!
    $after: String
    $first: Int
  ) {
    polygon {
      ...NftEventsFragment
    }
  }
  ${NftEventsFragment}
`;
