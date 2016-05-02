import React from 'react';

import StandingsRow from '../StandingsRow/StandingsRow.js';

require('./StandingsCard.scss');

class StandingsCard extends React.Component {
  render() {

    var leagueName = this.props.standing.leagueName;
    var includeTies = this.props.standing.includeTies;
    var tiesColumn;
    if (includeTies == true) {
      tiesColumn = <th className="header score-header other-score-header">Ties</th>;
    }

    var teams = this.props.standing.teams.map(function(dictionary) {
      return (
        <StandingsRow includeTies={includeTies} team={dictionary} />
      )
    });

    return (
      <div className="masonry-item">
        <h1>{leagueName}</h1>
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
