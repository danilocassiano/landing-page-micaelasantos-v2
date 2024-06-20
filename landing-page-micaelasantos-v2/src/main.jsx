import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.min.css';


AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
