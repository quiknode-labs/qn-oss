import { gql } from '@urql/core';
import { CollectionEventsFragment } from '../../../fragments/EventsByCollection';

export const PolygonMainnetEventsByCollection = gql`
  query PolygonMainnetEventsByCollection(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $before: String
    $after: String
    $first: Int
  ) {
    polygon {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;
