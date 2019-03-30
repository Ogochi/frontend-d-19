import './styles/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My App';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementsByTagName('body')[0]
);

module.hot.accept();
