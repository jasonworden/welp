import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        wot is life doe <i className="fa fa-star"/>
        <h1>env: {__NODE_ENV__}</h1>
      </div>
    );
  }
}

module.exports = App;
