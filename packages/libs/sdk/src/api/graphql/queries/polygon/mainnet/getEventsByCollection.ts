import { gql } from '@apollo/client/core';
import { CollectionEventsFragment } from '../../fragments/EventsByCollection';

export const PolygonMainnetEventsByCollection = gql`
  query PolygonMainnetEventsByCollection(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    polygon {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;
