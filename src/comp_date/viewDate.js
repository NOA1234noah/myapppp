import { Component } from "react";

export default class ViewDate extends Component{
state={days:999}
componentDidMount(){
    this.calcDays(this.props.deadline);
}
componentDidUpdate(_oldProps,_oldState){
if(_oldProps.deadline!=this.props.deadline){
    
}
}
calcDays=(_newDate)=>{

}
}
