import { gql } from '@urql/core';
import { ContractDetails } from '../../../fragments/contractDetails';

export const EthSepoliaContractDetails = gql`
  query EthSepoliaContractDetails($contractAddress: String!) {
    ethereumSepolia {
      ...ContractDetails
    }
  }
  ${ContractDetails}
`;
