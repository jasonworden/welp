import React, { Component } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';
import { searchNearby } from 'utils/googleApiHelpers';

import styles from './styles.module.css';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

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
        <Map
          className={styles.wrapper}
          visible={false}
          onReady={this.onReady.bind(this)}
          google={this.props.google}
        >
          <Header />
          <Sidebar
            title={'Restaurants'}
            places={this.state.places} />
        </Map>

        <div className={styles.content}>
          {this.state.places.map(place => {
            return (<div key={place.id}>{place.name}</div>)
          })}
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
