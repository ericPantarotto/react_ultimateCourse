import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App.jsx';
import AppHooks from './AppHooks';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppHooks />
  </StrictMode>
);
