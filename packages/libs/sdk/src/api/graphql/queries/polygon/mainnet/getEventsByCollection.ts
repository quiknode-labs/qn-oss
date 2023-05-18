import { gql } from '@apollo/client/core/index.js';
import { CollectionEventsFragment } from '../../fragments/EventsByCollection';

export const PolygonMainnetEventsByCollection = gql`
  query PolygonMainnetEventsByCollection(
    $contractAddress: String!
    $after: String
    $first: Int
  ) {
    polygon {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;
