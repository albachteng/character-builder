import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client';
import './assets/css/index.css';
import App from './components/App';

const client = new ApolloClient({
  uri: 'https://www.dnd5eapi.co/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Class: {keyFields: ['index']},
      Race: {keyFields: ['index']},
      Background: {keyFields: ['index']},
      // Skill: {keyFields: ['index']},
      // Proficiency: {keyFields: ['index']},
      // Feature: {keyFields: ['index']},
    }
  }),
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