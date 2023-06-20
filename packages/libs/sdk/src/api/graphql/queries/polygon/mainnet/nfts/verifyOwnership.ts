import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../../fragments/VerifyOwnershipInfo';

export const PolygonMainnetVerifyOwnership = gql`
  query PolygonMainnetVerifyOwnership($filter: WalletNFTsFilterInput) {
    polygon {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
