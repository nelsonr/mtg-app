import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import Reset from './Reset';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.players.map((player, index) => { 
          return <Player 
                    key={index}
                    id={index}
                    name={player.name}
                    life={player.life}
                    incrementLife={() => this.props.incrementLife(index)}
                    decrementLife={() => this.props.decrementLife(index)} />
        })}
        <Reset onClick={this.props.resetLife} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementLife: (index) => dispatch({ type: 'INCREMENT_LIFE', index }),
    decrementLife: (index) => dispatch({ type: 'DECREMENT_LIFE', index }),
    resetLife: (index) => dispatch({ type: 'RESET_LIFE' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
