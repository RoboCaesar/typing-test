import React from 'react';

export class TestTimer extends React.Component {
    state = {
        minutes: '1',
        seconds: '00'
    }
    render() {
        return (
            <div>
                <h2 className="timer-text">1:35</h2>
            </div>
        );
    }
}

export default TestTimer;