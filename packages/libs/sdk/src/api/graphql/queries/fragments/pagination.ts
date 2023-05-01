import { gql } from '@apollo/client/core'; // Using core to not pull in react hooks

export const Pagination = gql`
  fragment Pagination on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
