import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PubBody from './components/PubBody';



export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/pubreader" component={PubBody} />
    </Route>
);

