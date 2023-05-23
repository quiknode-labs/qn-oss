import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TransactionsNode } from './nodes/TransactionsNode';

export const GetTransactionsByWalletAddressFragment = gql`
  fragment GetTransactionsByWalletAddressFragment on EVMSchemaType {
    walletByAddress(address: $address) {
      address
      ensName
      transactions(first: $first, after: $after, orderDirection: $orderDirection) {
        edges {
          ...TransactionsNode
        }
        pageInfo {
          ...Pagination
        }
      }
    }
    ${TransactionsNode}
    ${Pagination}
  `;
