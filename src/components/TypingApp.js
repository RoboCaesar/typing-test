import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import Options from './Options';
import TestingArea from './TestingArea';

export default class TypingApp extends React.Component {
    state = {
        testing: false,
        userInput: '',
    }

    handleTextChange(event) {
        console.log("User changed the text to... " + event.target.value);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="app-container">
                    <Instructions/>
                    <Options 
                        handleTextChange={this.handleTextChange}
                    />
                    <TestingArea 
                        compareText={this.compareText}
                        userInput={this.userInput}
                        highlightedText={this.highlightedText}
                    />
                </div>
            </div>
        );
    }
}