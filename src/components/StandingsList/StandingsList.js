import React from 'react';

import StandingsCard from '../StandingsCard/StandingsCard.js';

class StandingsListComponent extends React.Component {
  render() {
    var cardNodes = this.props.standings.map(function(dictionary) {
      return (
        <StandingsCard key={dictionary.id} standing={dictionary} />
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
      editable: true,
      leagueName: 'Doubles – 2016',
      includeTies: false,
      teams: [
        {
          id: 4,
          name: 'Aaron & Duy',
          results: {
            winCount: 6,
            lossCount: 3
          }
        },
        {
          id: 5,
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
      editable: false,
      leagueName: 'Triples – 2016',
      includeTies: true,
      teams: [
        {
          id: 1,
          name: 'Reese',
          results: {
            winCount: 5,
            lossCount: 4,
            tieCount: 2
          }
        },
        {
          id: 2,
          name: 'Duy',
          results: {
            winCount: 2,
            lossCount: 8,
            tieCount: 1
          }
        },
        {
          id: 3,
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
