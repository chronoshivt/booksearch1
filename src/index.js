import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
  <div className="bg-gray-300">
    
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>,
    document.getElementById('root')
);


