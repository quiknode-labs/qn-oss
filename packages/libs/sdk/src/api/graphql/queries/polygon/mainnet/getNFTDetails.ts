import { gql } from '@apollo/client';
import { NftDetails } from '../../fragments/nftDetails';

export const PolygonMainnetNFTDetails = gql`
  query PolygonMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {
    polygon {
      ...NftDetails
    }
  }
  ${NftDetails}
`;
