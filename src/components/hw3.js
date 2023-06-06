import React,{ Component } from "react";

export default class Hw3 extends Component {
    state = {color: "silver"}
    selectRef = React.createRef();

    selcect = () => {
        console.log(this.selectRef.current.value);
        let input_val = this.selectRef.current.value
        document.querySelector("#color_id").innerHTML = input_val;
        this.setState({color: input_val});
    }

    render() {
        return (
            <>
                <h2 style={{color:this.state.color}}> select color: <span id="color_id"></span></h2>
                <select onClick={this.selcect} ref={this.selectRef}>
                    <option value="#">select color</option>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="black">black</option>
                </select>
            </>
        )
    }
}