import { useQuery } from '@apollo/client';

import {
  walletNFTsQuery,
  WalletNFTsQuery,
  WalletNFTsQueryVariables,
} from './query';

interface AddressArgs {
  address: string;
}

interface EnsArgs {
  ensName: string;
}

type Args = AddressArgs | EnsArgs;

const ENS_REGEX = /[a-z]+(.eth)/;
const ADDRESS_REGEX = /^0x[[:alnum:]]{40}$/;

function useWalletNFTs(args: Args) {
  let isSearchValid = false;

  if ('ensName' in args) {
    isSearchValid = ENS_REGEX.test(args.ensName);
  } else {
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
    nfts,
  };
}

export default useWalletNFTs;
