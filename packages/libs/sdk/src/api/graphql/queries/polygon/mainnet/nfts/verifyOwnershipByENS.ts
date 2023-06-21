import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfoByENS } from '../../../fragments/VerifyOwnershipInfoByENS';

export const PolygonMainnetVerifyOwnershipByENS = gql`
  query PolygonMainnetVerifyOwnershipByENS(
    $ensName: String!
    $filter: WalletNFTsFilterInput
  ) {
    polygon {
      ...VerifyOwnershipInfoByENS
    }
  }
  ${VerifyOwnershipInfoByENS}
`;
