import React, {Component} from "react";

export default class resetButton extends React.Component {
    render(){
        return(
            <button onClick={this.props.reset}>Reset</button>
        )
    }
}