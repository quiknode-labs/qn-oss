import { gql } from '@urql/core';
import { EventsByContract } from '../../../fragments/EventsByContract';

export const EthereumMainnetEventsByContract = gql`
  query EthereumMainnetEventsByContract($contractAddress: String!) {
    ethereum {
      ...EventsByContract
    }
  }
  ${EventsByContract}
`;
