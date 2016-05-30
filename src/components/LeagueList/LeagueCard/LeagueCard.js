import React from 'react';

import StandingsRow from '../StandingsRow/StandingsRow.js';

require('./LeagueCard.scss');
var Button = require('react-button')

class LeagueCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditButtonClicked = this.handleEditButtonClicked.bind(this);
  }
  handleEditButtonClicked(event) {
    event.stopPropagation;
    this.props.onEditButtonClicked(this.props.standing)
  }
  render() {

    var leagueName = this.props.league.name;
    var includeTies = this.props.league.permits_ties;
    var tiesColumn;
    if (includeTies == true) {
      tiesColumn = <th className="header score-header other-score-header">Ties</th>;
    }

    var showEditButton = false//this.props.standing.editable;
    var editButtonStyle = { height: '100%', minWidth: '64px' }
    var editButton = showEditButton ? <Button onClick={this.handleEditButtonClicked} style={editButtonStyle} >Edit</Button> : null;

    var teams = this.props.league.teams.map(function(dictionary) {
      return (
        <StandingsRow key={dictionary.id} permits_ties={includeTies} team={dictionary} />
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

LeagueCard.defaultProps = {
};

export default LeagueCard;
