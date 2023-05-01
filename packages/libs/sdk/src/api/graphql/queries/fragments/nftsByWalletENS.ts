import { gql } from '@apollo/client/core';

import { NftInfo } from './nft';
import { Pagination } from './pagination';

export const WalletByEnsFragment = gql`
  fragment WalletByEnsFragment on EVMSchemaType {
    walletByENS(ensName: $ensName) {
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
