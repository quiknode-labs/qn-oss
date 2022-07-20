import { gql } from '@apollo/client';

export const collectionQuery = gql`
  query Collection($address: String!, $includeStats: Boolean!) {
    contract(address: $address) {
      ... on ERC721Contract {
        address
        # name
        # symbol
        # stats(
        #   timeRange: {
        #     gte: "2022-01-01T00:00:00.000Z"
        #     lt: "2022-01-07T00:00:00.000Z"
        #   }
        # ) {
        #   floor
        #   volume
        # } @include(if: $includeStats)
        # unsafeOpenseaBannerImageUrl
        # unsafeOpenseaImageUrl
        # unsafeOpenseaSlug
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
}

export interface CollectionWithStats extends Collection {
  stats: {
    floor: number;
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
  includeStats: boolean;
}
