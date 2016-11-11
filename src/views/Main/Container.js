import React, { Component } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';

export class Container extends Component {
  render() {
    //wrapping Container in GoogleApiWrapper gives it a prop of google
    return (
      <div>
        Hello I am tupperware container hi hello
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
