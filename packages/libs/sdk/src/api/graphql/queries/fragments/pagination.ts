import { gql } from '@apollo/client/core/index.js';

export const Pagination = gql`
  fragment Pagination on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
