import React, { Component } from 'react';
import ReactDom from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './app.css';

import App from 'containers/App/App';

const mountNode = document.querySelector('#root');
ReactDom.render(<App />, mountNode);
