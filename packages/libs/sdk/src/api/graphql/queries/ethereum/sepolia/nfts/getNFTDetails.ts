import { gql } from '@apollo/client/core';
import { NftDetails } from '../../../fragments/nftDetails';

export const EthSepoliaNFTDetails = gql`
  query EthSepoliaNFTDetails($contractAddress: String!, $tokenId: String!) {
    ethereumSepolia {
      ...NftDetails
    }
  }
  ${NftDetails}
`;
