import { gql } from '@apollo/client';

export const collectionQuery = gql`
  query Collection($address: String!, $includeStats: Boolean!) {
    contract(address: $address) {
      ... on ERC721Contract {
        address
        name
        symbol
        stats @include(if: $includeStats) {
          average
          ceiling
          floor
          totalSales
          volume
        } 
        unsafeOpenseaBannerImageUrl
        unsafeOpenseaImageUrl
        unsafeOpenseaSlug
        unsafeOpenseaExternalUrl
      }
    }
  }
`;

export interface Collection {
  address: string;
  name: string;
  symbol: string;
  unsafeOpenseaBannerImageUrl: string | null;
  unsafeOpenseaImageUrl: string | null;
  unsafeOpenseaSlug: string | null;
  unsafeOpenseaExternalUrl: string | null;
}

export interface CollectionWithStats extends Collection {
  stats: {
    average: number | null;
    ceiling: number | null;
    floor: number | null;
    totalSales: number;
    volume: number;
  };
}

export interface CollectionQuery {
  contract: Collection;
}

export interface CollectionWithStatsQuery {
  contract: CollectionWithStats;
}

export interface CollectionQueryVariables {
  address: string;
  includeStats?: boolean;
}
