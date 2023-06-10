import { Component } from "react";

export default class Hw2 extends Component {
    state = { counter: 1 }
    next = () => {
        if (this.state.counter + 1 == 5)
            this.setState({ counter: 1 });
        else
            this.setState({ counter: this.state.counter + 1 });
    }
    back = () => {
        if (this.state.counter- 1 == 0)
            this.setState({ counter: 4 });
        else
            this.setState({ counter: this.state.counter -1 });
    }

render() {
    return (<>
<img src={"/images/swatch"+this.state.counter+".png"} height={300} width={250}/>
<button onClick={this.next}>next</button>
<button onClick={this.back}>back</button>
</>
    )
}
}