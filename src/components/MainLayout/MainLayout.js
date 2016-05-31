require('normalize.css/normalize.css');
require('./MainLayout.scss');

import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js';
import LeagueList from '../LeagueList/LeagueList.js';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <NavigationBar />
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainLayout.defaultProps = {
};

export default MainLayout;
