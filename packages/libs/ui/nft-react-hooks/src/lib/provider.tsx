import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useEffect } from 'react';
import create from 'zustand';

interface TokenStore {
  token?: string | null;
  setToken: (token: string | null) => void;
}

const useTokenStore = create<TokenStore>((set) => ({
  token: undefined,
  setToken: (token) => set({ token }),
}));

const httpLink = new HttpLink({
  uri: 'https://graphql.icy.tools/graphql',
});

function fetchToken() {
  const poll = (resolve: (value: string | null) => void) => {
    const token = useTokenStore.getState().token;

    if (token !== undefined) resolve(token);
    else setTimeout(() => poll(resolve), 50);
  };

  return new Promise(poll);
}

const authLink = setContext(async (_, { headers }) => {
  const token = await fetchToken();

  return {
    headers: {
      ...headers,
      ...(token && { 'x-api-key': token }),
    },
  };
});

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      ERC721Token: {
        keyFields: ['tokenId', 'contract', ['address']],
      },
      ERC721Contract: {
        keyFields: ['address'],
      },
      Wallet: {
        keyFields: ['address'],
      },
    },
  }),
});

interface IcyProviderProps {
  apiKey?: string;
  children: React.ReactNode;
}

function IcyProvider(props: IcyProviderProps) {
  const tokenStore = useTokenStore();

  useEffect(() => {
    const { apiKey } = props;
    if (typeof apiKey !== 'string' || apiKey.length === 0) {
      console.warn(
        'nft-react-hooks warning: no apiKey provided. Access with no apiKey is heavily rate limited and intended for development use only. For higher rate limits or production usage, create an account on https://developers.icy.tools/'
      );
    }
    tokenStore.setToken(apiKey ?? null);
  }, [props.apiKey]);

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export default IcyProvider;
