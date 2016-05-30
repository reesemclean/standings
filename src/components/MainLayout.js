require('normalize.css/normalize.css');
require('./MainLayout.scss');

import React from 'react';
import LeagueList from './LeagueList/LeagueList.js';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <LeagueList />
      </div>
    );
  }
}

MainLayout.defaultProps = {
};

export default MainLayout;
