import React from 'react';

export class TestTimer extends React.Component {
    state = {
        seconds: 600 //actually seconds * 10
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
        if (this.state.seconds === 0) {
            let originalTime = this.props.timeLimit
            this.props.finishTest(
                this.calculateWPM(this.props.wordsFinished, this.state.seconds, this.props.timeLimit),
                ((this.props.accurateChars / this.props.userProgress) * 100).toFixed(1)
            );
            this.setState(() => ({
                seconds: originalTime
            }))
        }
    }

    calculateWPM = (words, timeRemaining, timeLimit) => {
        let timeElapsed = (timeLimit - timeRemaining) / 600; //in minutes
        let rawWPM = (words / timeElapsed).toFixed(1);
        return rawWPM;
    }

    //formats seconds to look nicer
    // calculateStats = (timeRemaining) => { 
    //     let minutes = Math.floor(timeRemaining / 600);
    //     let seconds = Math.floor((timeRemaining - (minutes * 600)) / 10);
    //     let deciseconds = timeRemaining % 10;
    //     return (
    //         <div className={"timer " + (timeRemaining < 100 && "timer--hurryup")}>
    //             <h2 className="timer--text">{minutes}:{seconds < 10 ? '0' + seconds : seconds}</h2>
    //             <h3 className="timer--deciseconds">{deciseconds}</h3>
    //             <div className="stats">
    //                 <p className="stats--text">Accuracy: {((this.props.accurateChars / this.props.userProgress) * 100).toFixed(1)}%</p>
    //                 <p className="stats--text">Words Per Minute: {this.calculateWPM(this.props.wordsFinished, timeRemaining, this.props.timeLimit)}</p>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        let timeRemaining = this.state.seconds;
        let minutes = Math.floor(timeRemaining / 600);
        let seconds = Math.floor((timeRemaining - (minutes * 600)) / 10);
        let deciseconds = timeRemaining % 10;
        return (
            <div className={"timer " + (timeRemaining < 100 && "timer--hurryup")}>
                <h2 className="timer--text">{minutes}:{seconds < 10 ? '0' + seconds : seconds}</h2>
                <h3 className="timer--deciseconds">{deciseconds}</h3>
                {this.props.userProgress > 0 &&
                <div className="stats">
                    <p className="stats--text">Accuracy: {((this.props.accurateChars / this.props.userProgress) * 100).toFixed(1)}%</p>
                    <p className="stats--text">Words Per Minute: {this.calculateWPM(this.props.wordsFinished, timeRemaining, this.props.timeLimit)}</p>
                </div>}
            </div>
        );
    }
}

export default TestTimer;