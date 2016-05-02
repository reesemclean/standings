require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import StandingsListComponent from './StandingsList/StandingsList.js';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <StandingsListComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
