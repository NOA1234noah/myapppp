import { Component } from "react";
import Hw1 from './hw1';
import Hw2 from './hw2';
import Hw3 from './hw3';
import Hw4 from './hw4';
import Hw5 from './hw5';
export default class ALL extends Component{
render(){
    return(
        <>
        <Hw1/>
        <hr/>
        <Hw2/>
        <hr/>
        <Hw3/>
        <hr/>
        <Hw4/>
        <hr/>
        <Hw5/>
        </>
    )
}
}