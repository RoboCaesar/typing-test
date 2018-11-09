import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import TestingArea from './TestingArea';

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
                    <TestingArea/>
                </div>
            </div>
        );
    }
}