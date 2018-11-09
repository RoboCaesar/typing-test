import React from 'react';

export class TestTimer extends React.Component {
    state = {
        seconds: 60
    }
    componentDidMount() {
        this.setState(() => ({
            seconds: this.props.timeLimit
        }));
        this.interval = setInterval(() => {
            this.setState((prevState) => ({seconds: 
                (prevState.seconds - 1 >= 0 ? prevState.seconds - 1: 0)
            }))
        }, 1000);
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

    render() {
        return (
            <div>
                <h2 className="timer-text">{this.state.seconds}</h2>
            </div>
        );
    }
}

export default TestTimer;