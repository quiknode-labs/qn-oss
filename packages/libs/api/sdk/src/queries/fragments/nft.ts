import { gql } from "@apollo/client"

export const Nft = gql`
  fragment Nft on WalletNFT {
    nft {
      animationUrl
      description
      externalUrl
      name
      tokenId
      collection {
        address
      }
    }
  }
`
