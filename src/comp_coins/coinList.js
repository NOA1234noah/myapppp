import { Component } from "react";
import CoinItem from "./coinItem";

export default class CoinList extends Component{
    state = { ar: [] }

    componentDidMount() {
        this.doApi()
    }
    doApi = async () => {
        let url = "http://fs1.co.il/bus/bitcoin.php"
        let resp = await fetch(url)
        let data = await resp.json()

        this.setState({ ar: data })
    }
    render() {
        return (
            <div className="container">
                <h2 className="title2">Shop list:</h2>
                <h2>Test</h2>
                {/* <TestComp /> */}
                <div>
                    {this.state.ar.map(item => {
                        return (
                            <CoinItem key={item.id} item={item} />
                        )
                    })}
                </div>

            </div>)
    }
}

