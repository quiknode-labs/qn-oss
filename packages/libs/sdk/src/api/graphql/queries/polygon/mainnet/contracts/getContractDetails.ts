import { gql } from '@urql/core';
import { ContractDetails } from '../../../fragments/contractDetails';

export const PolygonMainnetContractDetails = gql`
  query PolygonMainnetContractDetails($contractAddress: String!) {
    polygon {
      ...ContractDetails
    }
  }
  ${ContractDetails}
`;
