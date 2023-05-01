import { gql } from '@apollo/client/core';

import { NftInfo } from './nft';
import { Pagination } from './pagination';

export const WalletByAddressFragment = gql`
  fragment WalletByAddressFragment on EVMSchemaType {
    walletByAddress(address: $address) {
      address
      ensName
      walletNFTs(after: $after, first: $first) {
        pageInfo {
          ...Pagination
        }
        edges {
          node {
            ...NftInfo
          }
        }
      }
    }
  }
  ${NftInfo}
  ${Pagination}
`;
