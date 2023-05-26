import { gql } from '@urql/core';
import { ContractDetails } from '../../../fragments/contractDetails';

export const EthMainnetContractDetails = gql`
  query EthMainnetContractDetails($contractAddress: String!) {
    ethereum {
      ...ContractDetails
    }
  }
  ${ContractDetails}
`;
