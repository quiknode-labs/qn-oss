import { gql } from '@apollo/client/core';
import { CollectionEventsFragment } from '../../fragments/EventsByCollection';

export const EthSepoliaEventsByCollection = gql`
  query EthSepoliaEventsByCollection(
    $contractAddress: String!
    $filter: TokenEventFilter
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;
