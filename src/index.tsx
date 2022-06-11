import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// styles
import './index.css';
// components
import App from './components/App/App';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render(<App />);