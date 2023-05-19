import { gql } from '@apollo/client/core';

export const Pagination = gql`
  fragment Pagination on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
