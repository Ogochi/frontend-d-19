import './scss/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

ReactDOM.render(
  <App/>,
  document.getElementsByTagName('body')[0]
);

module.hot.accept();
