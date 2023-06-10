import React, { Component } from "react";

export default class ExChange extends Component {
    state = { total: 0 }
    amountRef = React.createRef();
    currentRef = React.createRef();
    onAmountChange = () => {
        let total = this.amountRef.current.value * this.currentRef.current.value;
        this.setState({ total: total.toLocaleString() });
    }
    render() {
        return (
            <div className="col-md-4">
                <h2>enter currecyt</h2>
                <select ref={this.currentRef} onChange={this.onAmountChange} className="form-select">
                    <option value={3.57}>USD</option>
                    <option value={3.51}>Euro</option>
                    <option value={3.7}>Pound</option>
                </select>
                <h2>enter price</h2>
                <input defaultValue={1000} ref={this.amountRef} onInput={this.onAmountChange} type="number" className="form-control"/>
                <h3>total: {this.state.total} NIS</h3>
            </div>
        )
    }
}