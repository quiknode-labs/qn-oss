import { gql } from '@urql/core';

import { WalletNFTNode } from './nodes/WalletNft';
import { Pagination } from './pagination';

export const WalletByAddressFragment = gql`
  fragment WalletByAddressFragment on EVMSchemaType {
    walletByAddress(address: $address) {
      __typename
      address
      ensName
      walletNFTs(
        before: $before
        after: $after
        first: $first
        filter: $filter
      ) {
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
