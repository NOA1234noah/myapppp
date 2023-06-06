import React, { Component } from "react";
export default class Message extends Component {
    user = "noa";
    render() {
        return (<div className="message">
            <h3>user: {this.user}</h3>
            <h2>Message: {this.props.txt}</h2>
        </div>)
    }
}

