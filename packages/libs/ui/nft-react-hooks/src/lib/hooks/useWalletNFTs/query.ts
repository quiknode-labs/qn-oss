import { gql } from '@apollo/client';

import { Connection, PaginationArgs } from '../../types';

export const walletNFTsQuery = gql`
  query WalletNFTs(
    $address: String,
    $ensName: String,
    $first: Int,
    $after: String
  ) {
    wallet(
      address: $address,
      ensName: $ensName
    ) {
      ensName
      address
      tokens(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            tokenId
            images {
              url
            }
            ... on ERC721Token {
              contract {
                address
                ... on ERC721Contract {
                  symbol
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface NFT {
  tokenId: string;
  contract: {
    address: string;
    symbol: string;
    name: string;
  };
  images: {
    url: string;
  }[];
}

export interface WalletNFTsQuery {
  wallet: {
    ensName: string;
    address: string;
    tokens: Connection<NFT>;
  } | null;
}

interface WalletNFTsQueryAddressVariables extends PaginationArgs {
  address: string;
}

interface WalletNFTsQueryENSVariables extends PaginationArgs {
  ensName: string;
}

export type WalletNFTsQueryVariables =
  | WalletNFTsQueryAddressVariables
  | WalletNFTsQueryENSVariables;
