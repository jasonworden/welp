import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Redirect} from 'react-router';
// import App from 'containers/App/App';
import Container from './Container';

const Home = () => {
  return (<div>Hiiiii im home</div>);
}

export default (
  <Route path="/" component={Container}>
    {/* <IndexRoute component={Home} /> */}
    {/* <Redirect from="*" to="/" /> */}
  </Route>
)
