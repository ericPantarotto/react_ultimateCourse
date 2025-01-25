import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Counter from './Counter';
import AppV1 from './App-v1';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppV1 />
    {/* <App /> */}
    {/* <Counter /> */}
  </React.StrictMode>
);
