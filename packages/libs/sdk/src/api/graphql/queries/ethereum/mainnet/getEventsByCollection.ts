import { gql } from '@apollo/client/core/index.js';
import { CollectionEventsFragment } from '../../fragments/EventsByCollection';

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
