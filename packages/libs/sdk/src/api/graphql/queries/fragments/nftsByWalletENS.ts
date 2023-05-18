import { gql } from '@apollo/client';

import { WalletNFTNode } from './WalletNft';
import { Pagination } from './pagination';

export const WalletByEnsFragment = gql`
  fragment WalletByEnsFragment on EVMSchemaType {
    walletByENS(ensName: $ensName) {
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
