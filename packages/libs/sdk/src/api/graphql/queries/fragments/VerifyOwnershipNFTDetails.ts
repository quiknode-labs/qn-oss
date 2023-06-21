import { gql } from '@apollo/client';

export const VerifyOwnershipNFTDetails = gql`
  fragment VerifyOwnershipNFTDetails on WalletNFT {
    nft {
      contractAddress
      tokenId
    }
  }
`;
