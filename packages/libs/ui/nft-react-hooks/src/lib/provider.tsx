import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  concat,
} from '@apollo/client';
import React, { useEffect } from 'react';
import create from 'zustand';

console.log('hi?');

interface TokenStore {
  token: string | null;
  setToken: (token: string) => void;
}

const useTokenStore = create<TokenStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

const httpLink = new HttpLink({
  uri: 'https://graphql.icy.tools/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  console.log('token is: ', useTokenStore.getState().token);
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-api-key': useTokenStore.getState().token,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authLink, httpLink),
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
  apiKey: string;
  children: React.ReactNode;
}

function IcyProvider(props: IcyProviderProps) {
  const tokenStore = useTokenStore();

  useEffect(() => {
    tokenStore.setToken(props.apiKey);
  }, [props.apiKey]);

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export default IcyProvider;
