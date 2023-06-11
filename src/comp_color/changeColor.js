import { Component } from "react";

export default class ChangeColor extends Component {

    render() {
        return (<>
            <button className="btn btn-primary ms-2 rounded-5" onClick={() => { this.props.myCol("blue") }}>blue</button>
            <button className="btn btn-success ms-2 rounded-5" onClick={() => { this.props.myCol("green") }}>Green</button>
            <button className="btn btn-danger ms-2 rounded-5" onClick={() => { this.props.myCol("red") }}>red</button>
            <button className="btn btn-dark ms-2 rounded-5" onClick={() => { this.props.myCol("black") }}>black</button></>

        )
    }
}
\