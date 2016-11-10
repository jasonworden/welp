import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './app.css';
import styles from './styles.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        wot is life doe
      </div>
    );
  }
}

const mountNode = document.querySelector('#root');
ReactDom.render(<App />, mountNode);
