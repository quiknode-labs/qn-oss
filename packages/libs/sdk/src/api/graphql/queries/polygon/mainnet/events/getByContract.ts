import { gql } from '@urql/core';
import { EventsByContract } from '../../../fragments/EventsByContract';

export const PolygonMainnetEventsByContract = gql`
  query PolygonMainnetEventsByContract(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    polygon {
      ...EventsByContract
    }
  }
  ${EventsByContract}
`;
