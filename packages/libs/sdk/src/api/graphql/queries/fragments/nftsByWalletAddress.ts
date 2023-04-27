import { gql } from '@apollo/client';

import { NftInfo } from './nft';
import { Pagination } from './pagination';

export const WalletByAddressFragment = gql`
  fragment WalletByAddressFragment on EVMSchemaType {
    walletByAddress(ensName: $ensName) {
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
