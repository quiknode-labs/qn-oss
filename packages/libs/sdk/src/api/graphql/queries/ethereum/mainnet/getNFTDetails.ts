import { gql } from '@apollo/client/core/index.js';
import { NftDetails } from '../../fragments/nftDetails';

export const EthMainnetNFTDetails = gql`
  query EthMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {
    ethereum {
      ...NftDetails
    }
  }
  ${NftDetails}
`;
