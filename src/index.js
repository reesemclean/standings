import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import MainLayout from './components/MainLayout/MainLayout';
import LeagueList from './components/LeagueList/LeagueList';
import AuthenticationContainer from './components/AuthenticationContainer/AuthenticationContainer';
import SignupPage from './components/AuthenticationContainer/SignupPage/SignupPage';
import LoginPage from './components/AuthenticationContainer/LoginPage/LoginPage';

require('styles/App.scss');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={LeagueList} />
      <Route path="/auth" component={AuthenticationContainer}>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
