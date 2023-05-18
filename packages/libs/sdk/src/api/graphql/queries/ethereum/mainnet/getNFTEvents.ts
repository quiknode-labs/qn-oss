import { gql } from '@apollo/client';
import { NftEventsFragment } from '../../fragments/EventsByNft';

export const EthereumMainnetEventsByNft = gql`
  query EthereumMainnetEventsByNft(
    $contractAddress: String!
    $tokenId: String!
    $after: String
    $first: Int
  ) {
    ethereum {
      ...NftEventsFragment
    }
  }
  ${NftEventsFragment}
`;
