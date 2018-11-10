import React from 'react';
import TypingStatus from './TypingStatus';
import textSource from './TextSource';
import Options from './Options';
import showPartOfText from './StringFunctions';
import TestTimer from './TestTimer';


export default class TestingArea extends React.Component {
    state = {
        value: '', //What the user has entered in their testing window
        compareText: textSource('mysterious-island'),//"This is a string for the user to copy. It should be quite long so the user doesn't finish it."
        highlightedText: [],
        timeLimit: 600,
        wordsFinished: 0,
        accuracy: 0
    };

    resetTest = () => {
        console.log("reset!");
        this.setState(() => ({
            value: '',
            wordsFinished: 0,
            accuracy: 0
        }));
    }

    convertStringToArray = (str) => {
        let emptyArr = [];
        for (let i = 0; i < str.length; i++) {
            emptyArr.push(<span key={i}>{str[i]}</span>);
            if (i == str.length - 1) {
                return emptyArr;
            }
        }
    }

    componentWillMount() {
        this.setState(() => ({
            highlightedText: this.convertStringToArray(this.state.compareText)
        }));

    }

    highlightText = (str) => {
        let tempHighlightedText = this.state.highlightedText;
        let cursor = str.length;//this.state.value.length;
        let minCursor = cursor - 1;
        let maxCursor = cursor + 2;
        if (minCursor < 0) minCursor = 0;
        for (let i = minCursor; i < maxCursor; i++) {
            let element = this.state.compareText[i];
            if (i < cursor) {
                if (str[i] === element) {
                    tempHighlightedText[i] = (<span key={i} className="correct-words">{element}</span>);
                } else {
                    tempHighlightedText[i] = (<span key={i} className="incorrect-words">{element}</span>);
                }
            } 
            else if (i === cursor) {
                tempHighlightedText[i] = (<span key={i} className="current-letter">{element}</span>);
            }
            else {
                tempHighlightedText[i] = (<span key={i}>{element}</span>);
            }
        }
        return tempHighlightedText;
    }

    handleUserInput = (event) => {
        const val = event.target.value;
        if (val[val.length - 1] === ' ' && this.state.compareText[this.state.value.length - 1] === ' ') {
            //do nothing
        }
        else {
            this.setState(() => (
                {
                    value: val,
                    highlightedText: this.highlightText(val)
                }
            ));
        }
    };

    handleTextChange = (event) => {
        let newText = event.target.value;
        if (event.target.value != '') {
            this.setState(() => ({
                compareText: textSource(newText),
                highlightedText: this.convertStringToArray(textSource(newText))
            }));
            this.resetTest();
        }
    };

    handleTimeLimitChange = (event) => {
        let newTime = event.target.value;
        console.log("New time limit: " + parseInt(newTime, 10));
        if (event.target.value != '') {
            this.setState(() => ({
                timeLimit: parseInt(newTime, 10),
            }));
            this.resetTest();
        }
    }

    finishTest = (finalWPM, finalAccuracy) => {
        //TODO:
        //display dialogue window with results
        //reset test settings (so that when the window is closed, the test can immediately be started again)
        this.resetTest();
    }

    render() {
        return (
            <div>
                <TestTimer 
                    timeLimit={this.state.timeLimit}
                    userProgress={this.state.value.length}
                />
                <Options 
                    handleTextChange={this.handleTextChange}
                    handleTimeLimitChange={this.handleTimeLimitChange}
                />
                {/* <TypingStatus 
                    userStringLen={this.state.value.length}
                    highlightedText={this.state.highlightedText}
                /> */}
                <div className="text-to-copy">
                    <p>{showPartOfText(this.state.value.length, this.state.highlightedText)}...</p>
                </div>
                <form>
                    <textarea className="typing-area" value={this.state.value} onChange={this.handleUserInput}/>
                </form>
            </div>
        );
    }
}