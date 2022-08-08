import { useQuery } from '@apollo/client';

import { nftOwnerQuery, NFTOwnerQuery, NFTOwnerQueryVariables } from './query';

interface Args {
  contractAddress: string;
  tokenId: string;
}

function useNFTOwner(args: Args) {
  const { data, loading } = useQuery<NFTOwnerQuery, NFTOwnerQueryVariables>(
    nftOwnerQuery,
    {
      variables: args,
    }
  );

  return {
    loading,
    owner: data?.token?.owner ?? null,
  };
}

export default useNFTOwner;
