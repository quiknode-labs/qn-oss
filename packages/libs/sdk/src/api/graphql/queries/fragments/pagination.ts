import { gql } from '@apollo/client';

export const Pagination = gql`
  fragment Pagination on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
