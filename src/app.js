import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';

import 'font-awesome/css/font-awesome.css';
import './app.css';

import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#root')
);
