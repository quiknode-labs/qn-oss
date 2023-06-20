import { gql } from '@urql/core';
import { GasPrice } from '../../../fragments/GasPrices';

export const PolygonMainnetGasPrices = gql`
  query PolygonMainnetGasPrices($filter: GasPriceFilterInput) {
    polygon {
      ...GasPrice
    }
  }
  ${GasPrice}
`;
