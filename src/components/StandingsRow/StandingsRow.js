require('./StandingsRow.scss');

import React from 'react';

class StandingsRow extends React.Component {
  render() {

    var includeTies = this.props.includeTies;
    var teamName = this.props.team.name;
    var results = this.props.team.results;
    var winCount = results.winCount;
    var lossCount = results.lossCount;
    var tieCount = results.tieCount;

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
