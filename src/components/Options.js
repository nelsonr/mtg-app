import React, { Component } from "react";
import RadioButton from "./RadioButton";

import "../css/Options.css";

class Options extends Component {
    render() {
        return (
            <div className="Options">
                <div className="Options__settings">
                    <div className="Options__setting">
                        <h2>Players</h2>
                        <div className="Options__options-group">
                            <RadioButton
                                value={2}
                                selected={this.props.activePlayers === 2}
                                onClick={() => this.props.actions.setActivePlayers(2)}
                            />
                            <RadioButton
                                value={3}
                                selected={this.props.activePlayers === 3}
                                onClick={() => this.props.actions.setActivePlayers(3)}
                            />
                        </div>
                    </div>

                    <div className="Options__setting">
                        <h2>Starting Life</h2>
                        <div className="Options__options-group">
                            <RadioButton
                                value={20}
                                selected={this.props.startingLife === 20}
                                onClick={() => this.props.actions.setStartingLife(20)}
                            />
                            <RadioButton
                                value={30}
                                selected={this.props.startingLife === 30}
                                onClick={() => this.props.actions.setStartingLife(30)}
                            />
                            <RadioButton
                                value={40}
                                selected={this.props.startingLife === 40}
                                onClick={() => this.props.actions.setStartingLife(40)}
                            />
                        </div>
                    </div>
                </div>

                <div className="Options__confirm">
                    <button onClick={() => this.props.actions.changeScreen("GAME")}>
                        Close
                    </button>
                </div>
            </div>
        );
    }
}

export default Options;
