import React from 'react';

import StandingsCard from '../StandingsCard/StandingsCard.js';

class StandingsListComponent extends React.Component {
  render() {
    var cardNodes = this.props.standings.map(function(dictionary) {
      return (
        <StandingsCard standing={dictionary} />
      )
    });

    return (
      <section className="masonry">
        {cardNodes}
      </section>
    );
  }
}

StandingsListComponent.defaultProps = {
  standings: [
    {
      id: 1,
      leagueName: 'Doubles – 2016',
      includeTies: false,
      teams: [
        {
          name: 'Aaron & Duy',
          results: {
            winCount: 6,
            lossCount: 3
          }
        },
        {
          name: 'Ghazi & Reese',
          results: {
            winCount: 3,
            lossCount: 6
          }
        }
      ]
    },
    {
      id: 2,
      leagueName: 'Triples – 2016',
      includeTies: true,
      teams: [
        {
          name: 'Reese',
          results: {
            winCount: 5,
            lossCount: 4,
            tieCount: 2
          }
        },
        {
          name: 'Duy',
          results: {
            winCount: 2,
            lossCount: 8,
            tieCount: 1
          }
        },
        {
          name: 'Aaron',
          results: {
            winCount: 2,
            lossCount: 8,
            tieCount: 1
          }
        }
      ]
    }
  ]
};

export default StandingsListComponent;
