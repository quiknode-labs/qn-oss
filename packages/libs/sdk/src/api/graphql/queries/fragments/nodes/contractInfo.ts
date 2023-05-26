import { gql } from '@urql/core';

export const ContractInfo = gql`
  fragment ContractInfo on Contract {
    abi
    address
    isVerified
    name
    supportedErcInterfaces
    symbol
    ... on TokenContract {
      decimals
    }
  }
`;
