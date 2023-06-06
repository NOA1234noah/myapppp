import { Component } from "react";

export default class Hw2 extends Component{
    state={counter:1}
next=()=>{
if(this.state.counter+1==5)
this.setState({counter:1});
else
this.setState({counter:this.state.});
}
}