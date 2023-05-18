import { gql } from '@apollo/client';
import { NftDetails } from '../../fragments/nftDetails';

export const EthSepoliaNFTDetails = gql`
  query EthSepoliaNFTDetails($contractAddress: String!, $tokenId: String!) {
    ethereumSepolia {
      ...NftDetails
    }
  }
  ${NftDetails}
`;
