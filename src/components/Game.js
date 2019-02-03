import React, { Component } from "react";
import Player from "./Player";

import "../css/Game.css";

class Game extends Component {
    getActivePlayers() {
        return this.props.players.slice(0, this.props.activePlayers);
    }

    render() {
        return (
            <div className={`Game Game--players-${this.props.activePlayers}`}>
                <div className="Game__players">
                    {this.getActivePlayers().map((player, index) => {
                        return (
                            <Player
                                key={index}
                                id={index}
                                name={player.name}
                                life={player.life}
                                incrementLife={() =>
                                    this.props.actions.incrementLife(index)
                                }
                                decrementLife={() =>
                                    this.props.actions.decrementLife(index)
                                }
                            />
                        );
                    })}
                </div>

                <div className="Menu">
                    <button onClick={this.props.actions.resetLife}>Reset</button>

                    <button
                        className="Menu__options-button"
                        onClick={() => this.props.actions.changeScreen("OPTIONS")}
                    >
                        <img src="gear.svg" width="20" height="20" alt="Options" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Game;
