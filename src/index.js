import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('app'))
