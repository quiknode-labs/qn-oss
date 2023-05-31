import { gql } from '@urql/core';
import { EventsByContract } from '../../../fragments/EventsByContract';

export const EthereumSepoliaEventsByContract = gql`
  query EthereumSepoliaEventsByContract(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
  ) {
    ethereumSepolia {
      ...EventsByContract
    }
  }
  ${EventsByContract}
`;
