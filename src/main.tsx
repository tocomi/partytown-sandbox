import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Partytown } from '@builder.io/partytown/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Partytown debug={true} />
    <App />
  </React.StrictMode>
);
