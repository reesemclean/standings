require('./NavigationBar.scss');

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <h1>SkorBoard</h1>
        <div>
          <Link to="/signup" activeClassName="active">sign up</Link>
          <Link to="/login" activeClassName="active">log in</Link>
        </div>
      </div>
    );
  }
}

NavigationBar.defaultProps = {
};

export default NavigationBar;
