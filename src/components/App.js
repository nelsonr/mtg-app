import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import Options from "./Options";

import "../css/App.css";

class App extends Component {
    render() {
        let screen;

        if (this.props.screen === "OPTIONS") {
            screen = (
                <Options
                    activePlayers={this.props.activePlayers}
                    startingLife={this.props.startingLife}
                    actions={{
                        setStartingLife: this.props.setStartingLife,
                        setActivePlayers: this.props.setActivePlayers,
                        changeScreen: this.props.changeScreen
                    }}
                />
            );
        } else {
            screen = (
                <Game
                    activePlayers={this.props.activePlayers}
                    players={this.props.players}
                    actions={{
                        incrementLife: this.props.incrementLife,
                        decrementLife: this.props.decrementLife,
                        resetLife: this.props.resetLife,
                        changeScreen: this.props.changeScreen
                    }}
                />
            );
        }

        return <div className="App">{screen}</div>;
    }
}

function mapStateToProps(state) {
    return {
        screen: state.screen,
        startingLife: state.startingLife,
        activePlayers: state.activePlayers,
        players: state.players
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementLife: index => dispatch({ type: "INCREMENT_LIFE", index }),
        decrementLife: index => dispatch({ type: "DECREMENT_LIFE", index }),
        resetLife: _ => dispatch({ type: "RESET_LIFE" }),
        changeScreen: value => dispatch({ type: "CHANGE_SCREEN", value }),
        setStartingLife: value => dispatch({ type: "SET_STARTING_LIFE", value }),
        setActivePlayers: value => dispatch({ type: "SET_ACTIVE_PLAYERS", value })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
