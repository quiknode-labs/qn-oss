import { gql } from '@urql/core';
import { EventsByContract } from '../../../fragments/EventsByContract';

export const PolygonMainnetEventsByContract = gql`
  query PolygonMainnetEventsByContract(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
  ) {
    polygon {
      ...EventsByContract
    }
  }
  ${EventsByContract}
`;
