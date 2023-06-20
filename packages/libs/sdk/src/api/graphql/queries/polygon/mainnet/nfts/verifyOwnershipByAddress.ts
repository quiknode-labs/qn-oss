import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../../fragments/VerifyOwnershipInfo';

export const PolygonMainnetVerifyOwnershipByAddress = gql`
  query PolygonMainnetVerifyOwnershipByAddress(
    $address: String!
    $filter: WalletNFTsFilterInput
  ) {
    polygon {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
