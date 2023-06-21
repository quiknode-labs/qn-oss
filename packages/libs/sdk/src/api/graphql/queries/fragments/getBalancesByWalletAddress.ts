import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TokenBalanceNode } from './nodes/tokenBalanceNode';

export const GetBalancesByWalletAddressFragment = gql`
  fragment GetBalancesByWalletAddressFragment on EVMSchemaType {
    walletByAddress(address: $address) {
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
