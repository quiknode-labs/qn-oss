import { gql } from '@urql/core';

export const Pagination = gql`
  fragment Pagination on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
