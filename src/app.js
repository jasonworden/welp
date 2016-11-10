import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        wot is life doe
      </div>
    )
  }
}

const mountNode = document.querySelector('#root');
ReactDom.render(<App />, mountNode);
