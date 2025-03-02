import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App-render.jsx'
// import App from './App-hoc.jsx';
import App from './App-compound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
