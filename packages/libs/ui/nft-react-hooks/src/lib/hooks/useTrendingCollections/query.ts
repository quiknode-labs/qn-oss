import { gql } from '@apollo/client';

import { Connection } from '~/types';

export const trendingCollectionsQuery = gql`
  query TrendingCollections {
    contracts(orderBy: SALES, orderDirection: DESC) {
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
  contracts: Connection<Collection>;
}

export interface TrendingCollectionsQueryVariables {
  orderBy: 'SALES' | 'NAME' | 'VOLUME';
  orderDirection: 'DESC' | 'ASC';
}
