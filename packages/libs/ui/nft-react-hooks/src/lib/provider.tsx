import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import React, { useEffect } from 'react';
import create from 'zustand';

interface TokenStore {
  token: string | null;
  setToken: (token: string) => void;
}

const useTokenStore = create<TokenStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

const httpLink = new HttpLink({
  // uri: 'https://graphql.icy.tools/graphql',
  uri: 'http://localhost:1339/graphql',
});

function fetchToken() {
  const poll = (resolve: (value: string) => void) => {
    const token = useTokenStore.getState().token;

    if(token) resolve(token);
    else setTimeout(() => poll(resolve), 50);
  }

  return new Promise(poll);
}

const authLink = setContext(async (_, { headers }) => {

 const token = await fetchToken();

 return {
    headers: {
      ...headers,
      'x-api-key': token,
    }
  }
});

const errorLink = new ErrorLink(({ networkError, forward, operation }) => {
  if (networkError && 'statusCode' in networkError) {
    const token = useTokenStore.getState().token;
    if (token) {
      operation.setContext({
        headers: {
          ...operation.getContext()['headers'],
          'x-api-key': token,
        }
      })

      return forward(operation);
    }
  }

  return;
})

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
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
    if (typeof props.apiKey !== 'string') {
      throw new Error('You must pass a valid API key into <IcyProvider>');
    }
    tokenStore.setToken(props.apiKey);
    client.refetchQueries({});
  }, [props.apiKey]);

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export default IcyProvider;
