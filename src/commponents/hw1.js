import { Component } from "react";

export default class Hw1 extends Component {
    state = { counter: 0 }
    add = () => {

        if (this.state.counter + 1 > 5) {
            this.setState({ counter: 0 });
        }
        else {
            this.setState({ counter: this.state.counter + 1 })
        }
    }
    minus = () => {


        this.setState({ counter: this.state.counter - 1 })

    }
    render() {
        return (
            <>
            <h1 className="text-danger">Counter</h1>
                <h2>{this.state.counter}</h2>
                <button className="me-3 p-2" onClick={this.add}>+</button>
                <button className="p-2" onClick={this.minus}>-</button>
            </>
        )
    }

} 