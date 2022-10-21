import { gql } from '@apollo/client/core';
import { PaginationArgs, LogEvents } from '../../../types';

export const getNFTEventLogsRawQuery = gql`
  query NFTEvents(
    $address: String!
    $tokenId: String!
    $filter: LogsFilterInputType
    $first: Int
    $after: String
  ) {
    token(contractAddress: $address, tokenId: $tokenId) {
      ... on ERC721Token {
        tokenId
        contract {
          address # Included key field for caching
        }
        logs(filter: $filter, first: $first, after: $after) {
          edges {
            node {
              blockNumber
              type
              fromAddress
              toAddress
              estimatedConfirmedAt
              transactionHash
              ... on OrderLog {
                marketplace
                priceInEth
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
`;

export interface EventLogsQueryVariables extends PaginationArgs {
  address: string;
  tokenId: string;
  types?: LogEvents[];
}
