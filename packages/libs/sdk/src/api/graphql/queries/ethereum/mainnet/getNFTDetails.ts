import { gql } from '@urql/core';
import { NftDetails } from '../../fragments/nftDetails';

export const EthMainnetNFTDetails = gql`
  query EthMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {
    ethereum {
      ...NftDetails
    }
  }
  ${NftDetails}
`;
