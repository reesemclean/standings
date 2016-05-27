require('./StandingsList.scss');

import React from 'react';

import StandingsCard from './StandingsCard/StandingsCard.js';
var Modal = require('react-modal');

const customModalStyles = {
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, .0.5)'
  },
  content : {
    maxWidth          : '640px',
    margin            : '30px auto',
    boxShadow         : '0px 2px 4px 2px rgba(0, 0, 0, 0.2)',
    borderRadius      : '6px',
    border            : 'none'
  }
};

class StandingsListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false, leagues: []};
    this.handleEditButtonClicked = this.handleEditButtonClicked.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleEditButtonClicked(league) {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ leagues: data }))
      .catch(err => console.error(this.props.url, err.toString()))
  }
  render() {
    var list = this
    var cardNodes = this.state.leagues.map(function(dictionary) {
      return (
        <StandingsCard key={dictionary.id} league={dictionary} onEditButtonClicked={list.handleEditButtonClicked} />
      )
    });

    return (
      <div>
        <section className="masonry">
          {cardNodes}
        </section>
        <Modal
          isOpen={list.state.modalIsOpen}
          onRequestClose={list.closeModal}
          style={customModalStyles}
          closeTimeoutMS={150} >
          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    );
  }
}

StandingsListComponent.defaultProps = {
  'url': 'https://intense-lowlands-93826.herokuapp.com/leagues'
}

// StandingsListComponent.defaultProps = {
//   standings: [
//     {
//       id: 1,
//       editable: true,
//       leagueName: 'Doubles – 2016',
//       includeTies: false,
//       teams: [
//         {
//           id: 4,
//           name: 'Aaron & Duy',
//           results: {
//             winCount: 6,
//             lossCount: 3
//           }
//         },
//         {
//           id: 5,
//           name: 'Ghazi & Reese',
//           results: {
//             winCount: 3,
//             lossCount: 6
//           }
//         }
//       ]
//     },
//     {
//       id: 2,
//       editable: false,
//       leagueName: 'Triples – 2016',
//       includeTies: true,
//       teams: [
//         {
//           id: 1,
//           name: 'Reese',
//           results: {
//             winCount: 5,
//             lossCount: 5,
//             tieCount: 2
//           }
//         },
//         {
//           id: 2,
//           name: 'Duy',
//           results: {
//             winCount: 3,
//             lossCount: 8,
//             tieCount: 1
//           }
//         },
//         {
//           id: 3,
//           name: 'Aaron',
//           results: {
//             winCount: 2,
//             lossCount: 9,
//             tieCount: 1
//           }
//         }
//       ]
//     }
//   ]
// };

export default StandingsListComponent;
