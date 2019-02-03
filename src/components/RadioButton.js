import React, { Component } from "react";

import "../css/RadioButton.css";

class RadioButton extends Component {
    render() {
        let className = "RadioButton";

        if (this.props.selected) {
            className += " RadioButton--selected";
        }

        return (
            <div className={className} onClick={this.props.onClick}>
                {this.props.value}
            </div>
        );
    }
}

export default RadioButton;
