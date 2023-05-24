import { gql } from '@urql/core';
import { CollectionEventsFragment } from '../../../fragments/EventsByCollection';

export const EthMainnetEventsByCollection = gql`
  query EthMainnetEventsByCollection(
    $contractAddress: String!
    $after: String
    $first: Int
  ) {
    ethereum {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;
