import { gql } from '@apollo/client/core';
import { PaginationArgs, LogEvents } from '../../../types';

export const getContractEventLogsRawQuery = gql`
  query ContractEvents(
    $address: String!
    $filter: LogsFilterInputType
    $first: Int
    $after: String
  ) {
    contract(address: $address) {
      address
      logs(filter: $filter, first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            blockNumber
            type
            fromAddress
            toAddress
            estimatedConfirmedAt
            transactionHash
            token {
              contract {
                address
              }
              ... on ERC721Token {
                tokenId
              }
            }
            ... on OrderLog {
              marketplace
              priceInEth
            }
          }
        }
      }
    }
  }
`;

export interface ContractEventLogQueryVariables extends PaginationArgs {
  address: string;
  types?: LogEvents[];
}
