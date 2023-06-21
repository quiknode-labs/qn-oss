import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TokenBalanceNode } from './nodes/tokenBalanceNode';

export const GetBalancesByWalletENSFragment = gql`
  fragment GetBalancesByWalletENSFragment on EVMSchemaType {
    walletByENS(ensName: $ensName) {
      __typename
      address
      ensName
      tokenBalances(first: $first, before: $before, after: $after) {
        edges {
          node {
            ...TokenBalanceNode
          }
        }
        pageInfo {
          ...Pagination
        }
      }
    }
  }
  ${TokenBalanceNode}
  ${Pagination}
`;
