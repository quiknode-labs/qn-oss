import { gql } from '@apollo/client/core';
import { CollectionEventsFragment } from '../../fragments/EventsByCollection';

export const EthMainnetEventsByCollection = gql`
  query EthMainnetEventsByCollection(
    $contractAddress: String!
    $filter: TokenEventFilter
    $after: String
    $first: Int
  ) {
    ethereum {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;
