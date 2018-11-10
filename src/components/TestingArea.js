import React from 'react';
import TypingStatus from './TypingStatus';
import textSource from './TextSource';
import Options from './Options';
import showPartOfText from './StringFunctions';
import TestTimer from './TestTimer';
import Results from './Results';

export default class TestingArea extends React.Component {
    state = {
        value: '', //What the user has entered in their testing window
        compareText: textSource('mysterious-island'),//"This is a string for the user to copy. It should be quite long so the user doesn't finish it."
        highlightedText: [],
        timeLimit: 600,
        wordsFinished: 0,
        accurateChars: 0,
        testFinished: false,
        finalWPM: 0,
        finalAcc: 0
    };

    resetTest = (updateText=true) => {
        console.log("reset!");
        if (updateText) {
            this.setState(() => ({
                value: '',
                wordsFinished: 0,
                accurateChars: 0,
                highlightedText: this.convertStringToArray(this.state.compareText)
            }));
        }
        else {
            this.setState(() => ({
                value: '',
                wordsFinished: 0,
                accurateChars: 0,
            }));            
        }
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
        const userPosition = this.state.value.length;
        if (val[val.length - 1] === ' ' && this.state.compareText[userPosition - 1] === ' ' && val.length > userPosition) {
            //do nothing
        }
        else {
            //Have to update the number of correct characters (or wpm count)
            if (val.length < userPosition) {
                //This condition means the number of characters has decreased. If a deleted character was 'accurate',
                //then lower the accurate character count (for purposes of calculating accuracy)
                if (this.state.compareText[userPosition - 1] === this.state.value[userPosition - 1]) {
                    this.setState((prevState) => ({ accurateChars: prevState.accurateChars - 1 }));
                }
                if (this.state.compareText[userPosition - 1] === ' ') {
                    this.setState((prevState) => ({ wordsFinished: prevState.wordsFinished - 1}));
                }
            } 
            if (this.state.compareText[val.length -1] === ' ' && val.length > userPosition) {
                this.setState((prevState) => ({
                    wordsFinished: prevState.wordsFinished + 1
                }));
            }
            if (val[val.length - 1] === this.state.compareText[val.length -1] && val.length > userPosition) {
                this.setState((prevState) => ({ accurateChars: prevState.accurateChars + 1}));
            }
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
            this.resetTest(false);
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

    handleCloseWindow = () => {
        this.setState(() => ({
            finished: false
        }));
    }

    finishTest = (finalWPM, finalAccuracy) => {
        //TODO:
        //display dialogue window with results
        //reset test settings (so that when the window is closed, the test can immediately be started again)
        console.log("finished...");
        this.setState(() => ({
            finished: true,
            finalWPM: finalWPM,
            finalAcc: finalAccuracy
        }));
        this.resetTest();
    }

    render() {
        return (
            <div>
                <TestTimer 
                    timeLimit={this.state.timeLimit}
                    userProgress={this.state.value.length}
                    wordsFinished={this.state.wordsFinished}
                    accurateChars={this.state.accurateChars}
                    finishTest={this.finishTest}
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
                {/* <p>Words finished: {this.state.wordsFinished}</p>
                <p>Accuracy: {((this.state.accurateChars / this.state.value.length) * 100).toFixed(1)}%</p> */}
                <form>
                    <textarea className="typing-area" value={this.state.value} onChange={this.handleUserInput}/>
                </form>
                <Results 
                    finished={this.state.finished}
                    finalWPM={this.state.finalWPM}
                    finalAcc={this.state.finalAcc}
                    handleCloseWindow={this.handleCloseWindow}
                />
            </div>
        );
    }
}