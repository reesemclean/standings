require('./StandingsRow.scss');

import React from 'react';

class StandingsRow extends React.Component {
  render() {

    var includeTies = this.props.permits_ties;
    var teamName = this.props.team.name;

    var results = this.props.team.results_summary;
    var winCount = results.win_count;
    var lossCount = results.loss_count;
    var tieCount = results.tie_count;

    var tieNode;
    if (includeTies) {
      tieNode = <td className="data data-score data-other-score"><p>{tieCount}</p></td>
    }

    return (
      <tr className="data-row">
        <td className="data data-name"><p>{teamName}</p></td>
        <td className="data data-score data-main-score"><p>{winCount}</p></td>
        <td className="data data-score data-other-score"><p>{lossCount}</p></td>
        {tieNode}
      </tr>
    );
  }
}

StandingsRow.defaultProps = {
};

export default StandingsRow;
