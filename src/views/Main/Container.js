import React, { Component } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';
import { searchNearby } from 'utils/googleApiHelpers';

export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    };
  }

  onReady(mapProps, map) {
    const { google } = this.props;
    const options = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    };
    searchNearby(google, map, options)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        });
      }).catch((status, result) => {
        //error
        console.log('ERROR GETTING PLACES:', status , result);
      });
  }

  render() {
    //wrapping Container in GoogleApiWrapper gives it a prop of google
    return (
      <div>
        <h1>Demo</h1>
        <Map
          visible={false}
          onReady={this.onReady.bind(this)}
          google={this.props.google} />

        {this.state.places.map(place => {
          return (<div key={place.id}>{place.name}</div>)
        })}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
