import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from './Context';
import { App } from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token');
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token');
    window.location = '/user';
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-psi-two.vercel.app/graphql'
    })
  ])
});

ReactDom.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>, document.getElementById('app')
);
