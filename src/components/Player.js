import React, { Component } from "react";

import "../css/Player.css";

class Player extends Component {
    render() {
        return (
            <div className="Player" id={`player-${this.props.id}`}>
                <div className="Player-name">{this.props.name}</div>

                <div className="Player-life">{this.props.life}</div>

                <div className="Player-buttons">
                    <button
                        className="Player-button button-decrement"
                        onClick={this.props.decrementLife}
                    >
                        <span>-</span>
                    </button>
                    <button
                        className="Player-button button-increment"
                        onClick={this.props.incrementLife}
                    >
                        <span>+</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Player;
