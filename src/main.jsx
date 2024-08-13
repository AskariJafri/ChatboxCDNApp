import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this path is correct
import './index.css'; // Ensure this file exists and is correctly imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
