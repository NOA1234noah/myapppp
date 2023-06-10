import React, { Component } from "react";

export default class Hw4 extends Component {
    state = { choose:"./images/swatch1.png" }
    select_Ref = React.createRef();
    selectPicure=()=>{
        let selcectPic = this.select_Ref.current.value
        console.log(selcectPic);
        this.setState({ choose: selcectPic });
    }
    render() {
        return (
            <>
                <h2> select fovorite watch: </h2>
                <select onClick={this.selectPicure} ref={this.select_Ref}>
                    <option value="./images/swatch1.png">white watch</option>
                    <option value="./images/swatch2.png">blue watch</option>
                    <option value="./images/swatch3.png">colorfull watch</option>
                    <option value="./images/swatch4.png">blue orange watch</option>
                </select>
                <img src={this.state.choose} height={200} width={150} />
            </>
        )
    }
}