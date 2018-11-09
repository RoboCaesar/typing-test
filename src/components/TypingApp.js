import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import TestingArea from './TestingArea';
import TestTimer from './TestTimer';

export default class TypingApp extends React.Component {
    state = {
        testing: false,
        userInput: '',
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="app-container">
                    <Instructions/>
                    <TestTimer />
                    <TestingArea/>
                </div>
            </div>
        );
    }
}