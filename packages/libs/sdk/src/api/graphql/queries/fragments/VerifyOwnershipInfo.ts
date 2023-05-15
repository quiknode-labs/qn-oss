import { gql } from '@apollo/client';

export const VerifyOwnershipInfo = gql`
  fragment VerifyOwnershipInfo on EVMSchemaType {
    walletByAddress(address: $address) {
      walletNFTs(filter: { contractAddressIn: $contractAddresses }) {
        edges {
          node {
            nft {
              contractAddress
              tokenId
            }
          }
        }
      }
    }
  }
`;
