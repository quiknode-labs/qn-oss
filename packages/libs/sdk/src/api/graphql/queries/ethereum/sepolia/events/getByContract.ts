import { gql } from '@urql/core';
import { EventsByContract } from '../../../fragments/EventsByContract';

export const EthereumSepoliaEventsByContract = gql`
  query EthereumSepoliaEventsByContract(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $before: String
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...EventsByContract
    }
  }
  ${EventsByContract}
`;
