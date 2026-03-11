import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Ensure your Tailwind directives are in here!
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping App in BrowserRouter enables routing across the whole site */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);