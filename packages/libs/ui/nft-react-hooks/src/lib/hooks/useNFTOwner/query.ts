import { gql } from '@apollo/client';

export const nftOwnerQuery = gql`
  query NFTOwner($contractAddress: String!, $tokenId: String!) {
    token(contractAddress: $contractAddress, tokenId: $tokenId) {
      tokenId
      contract {
        address
      }
      ... on ERC721Token {
        owner {
          address
          ensName
        }
      }
    }
  }
`;

export interface NFTOwnerQuery {
  token: {
    tokenId: string;
    contract: {
      address: string;
    };
    owner: {
      address: string;
      ensName: string | null;
    } | null;
  } | null;
}

export interface NFTOwnerQueryVariables {
  contractAddress: string;
  tokenId: string;
}
