import { gql } from '@apollo/client/core';
import { Pagination } from './pagination';
import { TokenBalanceNode } from './nodes/tokenBalanceNode';

export const GetBalancesByWalletENSFragment = gql`
  fragment GetBalancesByWalletENSFragment on EVMSchemaType {
    walletByENS(ensName: $ensName) {
      address
      ensName
      tokenBalances(first: $first, after: $after) {
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
