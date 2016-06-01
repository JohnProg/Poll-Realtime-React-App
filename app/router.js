import React from 'react';

import { Router, Route, Link, IndexRoute, useRouterHistory, hashHistory } from 'react-router';
import { createHashHistory } from 'history'


import App from './components/App';
import Audience from './components/Audience';
import Speaker from './components/Speaker';
import Board from './components/Board';
import Whoops404 from './components/Whoops404';

const routes = (
    <Route component={App}>
    	<Route path="/" component={Audience} />
        <Route path="speaker" component={Speaker} />
        <Route path="board" component={Board} />
        <Route path="*" component={Whoops404} />
    </Route>
);

// useRouterHistory creates a composable higher-order function
//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default (
  <Router history={hashHistory}>{routes}</Router>
);