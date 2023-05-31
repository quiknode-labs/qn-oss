import { gql } from '@urql/core';
import { EventsByContract } from '../../../fragments/EventsByContract';

export const EthereumSepoliaEventsByContract = gql`
  query EthereumSepoliaEventsByContract(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...EventsByContract
    }
  }
  ${EventsByContract}
`;
