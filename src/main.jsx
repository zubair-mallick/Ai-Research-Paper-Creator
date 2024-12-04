import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18+

import App from './App';

const Root = () => (
  <App />
);

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
