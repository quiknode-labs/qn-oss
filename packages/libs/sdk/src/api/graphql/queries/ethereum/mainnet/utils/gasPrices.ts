import { gql } from '@urql/core';
import { GasPrice } from '../../../fragments/GasPrices';

export const EthMainnetGasPrices = gql`
  query EthMainnetGasPrices($filter: GasPriceFilterInput) {
    ethereum {
      ...GasPrice
    }
  }
  ${GasPrice}
`;
