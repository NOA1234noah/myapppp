import React,{ Component } from "react";
import ViewDate from "./viewDate";
import InputDate from "./inputDate";

export default class AppDate extends Component{
    state={deadLine:"2023-01-01"};
    changeDate=(_newDate)=>{
        this.setState({deadLine:_newDate})
    }
    render(){
        return(
           <div className=".container">
            <ViewDate deadline={this.state.deadLine}/>
            <InputDate changeDate={this.changeDate}/>
           </div>

        )
    }
}