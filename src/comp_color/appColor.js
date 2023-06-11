import React,{ Component } from "react";
import ChangeColor from "./changeColor";

export default class APPColor extends Component{
    state={colorT:"black"}
    render(){
        return(
        
            <h1 style={color:{this.state.colorT}}>welcome</h1>
            <ChangeColor/>
        )
    }
}