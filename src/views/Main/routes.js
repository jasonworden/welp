import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Redirect} from 'react-router';
import Container from './Container';

export default (
  <Route path="/" component={Container}>
    {/* <IndexRoute component={Home} /> */}
    {/* <Redirect from="*" to="/" /> */}
  </Route>
)
