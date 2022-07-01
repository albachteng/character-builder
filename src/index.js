import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import './assets/css/index.css';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './RelayEnvironment';
import AppRoot from './AppRoot';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <AppRoot />
      </Suspense>
    </RelayEnvironmentProvider>
);
