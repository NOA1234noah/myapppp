import React,{ Component } from "react";

export default class Hw3 extends Component {
    state = {color: "black"}
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
                <h2 style={{color:this.state.color}}> select color: <span id="color_id">black</span></h2>
                <select onClick={this.selcect} ref={this.selectRef}>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="silver">silver</option>
                </select>
            </>
        )
    }
}