import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import Options from './Options';
import TestingArea from './TestingArea';

export default class TypingApp extends React.Component {
    state = {
        testing: false
    }

    handleTextChange() {
        console.log("User changed the text");
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
                    <TestingArea />
                </div>
            </div>
        );
    }
}