import React, { Component } from "react";
import "../css/Reset.css";

class Reset extends Component {
    render() {
        return (
            <div className="Reset">
                <button onClick={this.props.onClick}>Reset</button>
            </div>
        );
    }
}

export default Reset;
