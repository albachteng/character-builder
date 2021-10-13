import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client';
import './assets/css/index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://www.dnd5eapi.co/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);