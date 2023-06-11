import React, { Component } from "react";

export default class ViewDate extends Component {
    state = { days: 999 }
    componentDidMount() {
        this.calcDays(this.props.deadline);
    }
    componentDidUpdate(_oldProps, _oldState) {
        if (_oldProps.deadline != this.props.deadline) {
            this.calcDays(this.props.deadline);
        }
    }
    calcDays = (_newDate) => {
        let time = Date.parse(_newDate) - Date.now();
        let newDays = Math.floor(time / (1000 * 60 * 60 * 24))
        this.setState({ days: newDays });
    }
    render() {
        return (
            <div className='text-center'>
                <h2>Countdown to: {this.props.deadline1}</h2>
                <h3>Days: {this.state.days}</h3>
            </div>


        )
    }
}
