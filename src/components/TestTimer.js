import React from 'react';

export class TestTimer extends React.Component {
    state = {
        seconds: 600
    }
    componentDidMount() {
        this.setState(() => ({
            seconds: this.props.timeLimit
        }));
        this.interval = setInterval(() => {
            if (this.props.userProgress === 0) {
                this.setState(() => ({seconds: 
                    this.props.timeLimit
                }))
            }
            else {
                this.setState((prevState) => ({seconds: 
                    (prevState.seconds - 1 >= 0 ? prevState.seconds - 1: 0)
                }))
            }
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.timeLimit !== this.props.timeLimit) {
            this.setState(() => ({seconds: 
                this.props.timeLimit
            })) 
        }
    }

    //formats seconds to look nicer
    convertTime = (timeRemaining) => { 
        let minutes = Math.floor(timeRemaining / 600);
        let seconds = Math.floor((timeRemaining - (minutes * 600)) / 10);
        let deciseconds = timeRemaining % 10;
        return (
            <div className={"timer " + (timeRemaining < 100 && "timer--hurryup")}>
                <h2 className="timer--text">{minutes}:{seconds < 10 ? '0' + seconds : seconds}</h2>
                <h3 className="timer--deciseconds">{deciseconds}</h3>
                <div className="stats">
                    <p className="stats--text">Accuracy: </p>
                    <p className="stats--text">Words Per Minute: </p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {/* <h2 className="timer-text">{Math.floor(this.state.seconds / 600)}:{(this.state.seconds % 600 / 10)}</h2> */}
                {this.convertTime(this.state.seconds)}
            </div>
        );
    }
}

export default TestTimer;