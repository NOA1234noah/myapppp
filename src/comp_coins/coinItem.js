
import React, { Component } from "react"

export default class CoinItem extends Component {

    render() {
        let item = this.props.item
        return (
            <div className="col-md-4 border p-2">
                <div className="float-end badge bg-danger">{item.cat}</div>
                <h4>{item.name}</h4>
                <div>Value: {item.price_usd.fixed(2)} usd</div>
            </div>)
    }
}
