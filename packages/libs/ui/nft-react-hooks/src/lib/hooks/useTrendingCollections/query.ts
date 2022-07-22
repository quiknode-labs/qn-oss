import { gql } from '@apollo/client';

import { Connection, PaginationArgs } from '../../types';

export const trendingCollectionsQuery = gql`
  query TrendingCollections(
    $first: Int,
    $after: String,
    $orderBy: TrendingCollectionsOrderByEnum,
    $orderDirection: OrderDirectionEnum,
    $timePeriod: TrendingCollectionsTimePeriodEnum
  ) {
    trendingCollections(
      first: $first,
      after: $after,
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      timePeriod: $timePeriod
    ) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          address
          ... on ERC721Contract {
            name
            stats {
              totalSales
              average
              ceiling
              floor
              volume
            }
            symbol
          }
        }
      }
    }
  }
`;

export interface Collection {
  address: string;
  name: string;
  stats: {
    totalSales: number;
    average: number;
    ceiling: number;
    floor: number;
    volume: number;
  };
  symbol: number;
}

export interface TrendingCollectionsQuery {
  trendingCollections: Connection<Collection>;
}

export enum TrendingCollectionsTimePeriod {
  ONE_HOUR = 'ONE_HOUR',
  TWELVE_HOURS = 'TWELVE_HOURS',
  ONE_DAY = 'ONE_DAY',
  SEVEN_DAYS = 'SEVEN_DAYS'
}

export interface TrendingCollectionsQueryVariables extends PaginationArgs {
  orderBy: 'SALES' | 'AVERAGE' | 'VOLUME';
  orderDirection: 'DESC' | 'ASC';
  timePeriod?: TrendingCollectionsTimePeriod;
}
