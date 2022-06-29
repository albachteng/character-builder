import { Character } from './queries/Character';
import React, { Suspense } from 'react';
import  {loadQuery} from 'react-relay/hooks';
import ReactDOM from 'react-dom';
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './assets/css/index.css';
import App from './components/App';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './RelayEnvironment';

const preloadedQuery = loadQuery(RelayEnvironment, Character, {
  class: { index: 'fighter'},
  race: { index: 'human'},
  level: 1,
  background: { index: 'acolyte'},
})

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery}/>
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
