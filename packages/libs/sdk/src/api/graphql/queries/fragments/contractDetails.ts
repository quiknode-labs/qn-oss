import { gql } from '@urql/core';
import { ContractInfo } from './nodes/contractInfo';

export const ContractDetails = gql`
  fragment ContractDetails on EVMSchemaType {
    contract(contractAddress: $contractAddress) {
      ...ContractInfo
    }
  }
  ${ContractInfo}
`;
