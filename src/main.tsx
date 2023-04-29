import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PartytownProvider } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PartytownProvider>
      <App />
    </PartytownProvider>
  </React.StrictMode>
);
