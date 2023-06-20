import { gql } from '@urql/core';
import { CollectionEventsFragment } from '../../../fragments/EventsByCollection';

export const EthSepoliaEventsByCollection = gql`
  query EthSepoliaEventsByCollection(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $before: String
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;
