import { gql } from '@apollo/client';

import { Connection } from '~/types';

export const walletNFTsQuery = gql`
  query WalletNFTs($ensName: String!) {
    wallet(ensName: $ensName) {
      ensName
      address
      tokens {
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

interface WalletNFTsQueryAddressVariables {
  address: string;
}

interface WalletNFTsQueryENSVariables {
  ensName: string;
}

export type WalletNFTsQueryVariables =
  | WalletNFTsQueryAddressVariables
  | WalletNFTsQueryENSVariables;
