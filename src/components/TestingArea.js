import React from 'react';
import TypingStatus from './TypingStatus';
import textSource from './TextSource';

export default class TestingArea extends React.Component {
    state = {
        value: '',
        compareText: textSource('oliver'),//"This is a string for the user to copy. It should be quite long so the user doesn't finish it."
        highlightedText: []
    };

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
        // for (let i = 0; i < this.props.compareText.length; i++) {
        //     highlightObject.push(<span key={i}>{this.props.compareText[i]}</span>);
        // }
        this.setState(() => ({
            highlightedText: this.convertStringToArray(this.state.compareText)
        }));

    }

    highlightText = (str) => {
        let tempHighlightedText = this.state.highlightedText;
        let cursor = str.length;//this.state.value.length;
        let minCursor = cursor - 1;
        let maxCursor = cursor + 1;
        if (minCursor < 0) minCursor = 0;
        for (let i = minCursor; i < maxCursor; i++) {
            let element = this.state.compareText[i];
            if (i < cursor) {
                console.log("fd;lskajf;dlskajf  Made it here!");
                if (str[i] === element) {
                    tempHighlightedText[i] = (<span key={i} className="correct-words">{element}</span>);
                } else {
                    tempHighlightedText[i] = (<span key={i} className="incorrect-words">{element}</span>);
                }
            } 
            else {
                tempHighlightedText[i] = (<span key={i}>{element}</span>);
            }
        }
        return tempHighlightedText;
    }

    handleUserInput = (event) => {
        const val = event.target.value;
        if (val[val.length - 1] === ' ' && this.state.value[this.state.value.length - 1] === ' ') {
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

    render() {
        return (
            <div>
                <TypingStatus 
                    userStringLen={this.state.value.length}
                    highlightedText={this.state.highlightedText}
                />
                <form>
                    <textarea className="typing-area" value={this.state.value} onChange={this.handleUserInput}/>
                </form>
            </div>
        );
    }
}