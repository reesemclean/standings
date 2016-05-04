import React from 'react';

import StandingsRow from '../StandingsRow/StandingsRow.js';

require('./StandingsCard.scss');
var Button = require('react-button')

class StandingsCard extends React.Component {
  render() {

    var leagueName = this.props.standing.leagueName;
    var includeTies = this.props.standing.includeTies;
    var tiesColumn;
    if (includeTies == true) {
      tiesColumn = <th className="header score-header other-score-header">Ties</th>;
    }

    function clicked(event){
      event.stopPropagation();
    }

    var showEditButton = this.props.standing.editable;
    var editButtonStyle = { height: '100%', minWidth: '64px' }
    var editButton = showEditButton ? <Button onClick={clicked} style={editButtonStyle} >Edit</Button> : null;

    var teams = this.props.standing.teams.map(function(dictionary) {
      return (
        <StandingsRow key={dictionary.id} includeTies={includeTies} team={dictionary} />
      )
    });

    return (
      <div className="masonry-item">
        <div className="card-header">
          <h1>{leagueName}</h1>
          {editButton}
        </div>
        <table>
          <thead>
            <tr className="header-row">
              <th className="header name-score-header">Team</th>
              <th className="header score-header main-score-header">Wins</th>
              <th className="header score-header other-score-header">Losses</th>
              {tiesColumn}
            </tr>
          </thead>
          <tbody>
            {teams}
          </tbody>
        </table>
      </div>
    );
  }
}

StandingsCard.defaultProps = {
};

export default StandingsCard;
