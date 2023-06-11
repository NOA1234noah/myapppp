import React, { Component } from "react";
import ChangeColor from "./changeColor";

export default class APPColor extends Component {
    state = { colorT: "black" }
    changeColor = (_color) => {
        this.setState({ colorT: _color })
    }
    render() {
        return (
            <div className="text-center">
                <h1 style={{ color: this.state.colorT }}>welcome</h1>
                <ChangeColor myCol={this.changeColor} />
            </div>
        )
    }
}