
import React from  'react';
import { Redirect, Route, Switch } from 'react-router';
import { HomePage, VideoPage } from './pages/home/container';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },

  {
    path: '/:id',
    component: VideoPage,
    exact: true,
  }
];

const RouteMap = () => (
  <React.Fragment>
    <Switch>
      { routes.map((item, index) => <Route { ...item } key={index} />) }
      <Redirect exact from="*" to="/" />
    </Switch>
  </React.Fragment>
);

export default RouteMap;