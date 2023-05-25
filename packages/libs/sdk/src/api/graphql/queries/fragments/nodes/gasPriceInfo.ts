import { gql } from '@urql/core';

export const GasPriceInfo = gql`
  fragment GasPriceInfo on GasPrice {
    blockNumber
    total
    average
    ceiling
    floor
    median
  }
`;
