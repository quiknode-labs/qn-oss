import { gql } from '@urql/core';
import { NftEventsFragment } from '../../../fragments/EventsByNft';

export const EthereumMainnetEventsByNft = gql`
  query EthereumMainnetEventsByNft(
    $contractAddress: String!
    $tokenId: String!
    $filter: TokenEventsFilterInput
    $before: String
    $after: String
    $first: Int
  ) {
    ethereum {
      ...NftEventsFragment
    }
  }
  ${NftEventsFragment}
`;
