import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import MainLayout from './components/MainLayout';

require('styles/App.scss');

ReactDOM.render((
  <Router>
    <Route path="/" component={MainLayout} />
  </Router>
), document.getElementById('app'))
