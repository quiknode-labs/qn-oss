import { gql } from '@urql/core';
import { EventsByContract } from '../../../fragments/EventsByContract';

export const EthereumMainnetEventsByContract = gql`
  query EthereumMainnetEventsByContract(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    ethereum {
      ...EventsByContract
    }
  }
  ${EventsByContract}
`;
