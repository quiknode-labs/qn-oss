import { gql } from '@urql/core';
import { GasPrice } from '../../../fragments/GasPrices';

export const EthSepoliaGasPrices = gql`
  query EthSepoliaGasPrices($filter: GasPriceFilterInput) {
    ethereumSepolia {
      ...GasPrice
    }
  }
  ${GasPrice}
`;
