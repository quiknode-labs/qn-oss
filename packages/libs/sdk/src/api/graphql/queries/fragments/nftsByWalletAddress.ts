import { gql } from '@apollo/client/core';

import { WalletNFTNode } from './nodes/WalletNft';
import { Pagination } from './pagination';

export const WalletByAddressFragment = gql`
  fragment WalletByAddressFragment on EVMSchemaType {
    walletByAddress(address: $address) {
      address
      ensName
      walletNFTs(after: $after, first: $first, filter: $filter) {
        pageInfo {
          ...Pagination
        }
        edges {
          node {
            ...WalletNFTNode
          }
        }
      }
    }
  }
  ${WalletNFTNode}
  ${Pagination}
`;
