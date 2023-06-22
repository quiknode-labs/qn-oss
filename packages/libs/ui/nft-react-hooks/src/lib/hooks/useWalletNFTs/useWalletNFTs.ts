import { useQuery } from '@apollo/client';

import {
  walletNFTsQuery,
  WalletNFTsQuery,
  WalletNFTsQueryVariables,
} from './query';

type Args = WalletNFTsQueryVariables;

const ENS_REGEX = /[a-z]+\.eth/;
const ADDRESS_REGEX = /^0x[[:alnum:]]{40}$/;

function useWalletNFTs(args: Args) {
  let isSearchValid = false;

  if ('ensName' in args) {
    if (args.ensName?.length > 255) throw new Error('Input too long');
    isSearchValid = ENS_REGEX.test(args.ensName);
  } else {
    if (args.address?.length > 42) throw new Error('Input too long');
    isSearchValid = ADDRESS_REGEX.test(args.address);
  }

  const { data, loading } = useQuery<WalletNFTsQuery, WalletNFTsQueryVariables>(
    walletNFTsQuery,
    {
      skip: !isSearchValid, // We don't want to run invalid queries and waste rate limits
      variables: args,
    }
  );

  const nfts = (data?.wallet?.tokens.edges ?? []).map((e) => e.node);

  return {
    isSearchValid,
    loading,
    pageInfo: data?.wallet?.tokens.pageInfo,
    nfts,
  };
}

export default useWalletNFTs;
