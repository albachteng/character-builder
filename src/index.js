import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './assets/css/index.css';
import App from './components/App';

const client = new ApolloClient({
  uri: 'https://www.dnd5eapi.co/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      // most of this API uses unique 'index' strings rather than id or _id
      Class: {
        keyFields: ['index']
        // merge: true
      },
      Race: { keyFields: ['index'] },
      Background: { keyFields: ['index'] },
      ClassSpellcasting: {
        keyFields: [], // class spellcasting data is unique per class
        fields: {
          info: {
            // and therefore so is the info
            merge(existing, incoming) {
              return { ...existing, ...incoming };
            }
          }
        }
      }
    }
  })
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
