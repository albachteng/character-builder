import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnvironment from './RelayEnvironment';
import './assets/css/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);