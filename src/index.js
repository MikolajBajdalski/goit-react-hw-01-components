import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(<App />);
