import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
