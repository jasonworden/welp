import React, { Component } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';

export class Container extends Component {
  render() {
    console.log('gapi:', __GAPI_KEY__)
    return (
      <div>
        Hello I am tupperware container hi hello
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
