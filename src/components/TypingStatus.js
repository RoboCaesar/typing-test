import React from 'react';


export default class TypingStatus extends React.Component {

    //method for counting words from https://stackoverflow.com/questions/18679576/counting-words-in-string
    countWords = (str) => {
        return str.split(' ')
        .filter(function(n) { return n != '' })
        .length;
    };

    showPartOfText = () => {
        let cursor = this.props.userStringLen;
        let startPoint = parseInt((cursor / 100), 10);
        if (startPoint * 100 < 100) {
            startPoint = 0;
        } else {
            startPoint = startPoint - 1
        }
        console.log("start point: " + startPoint*100);
        console.log("end point: " + (startPoint * 100 + 300));
        return this.props.highlightedText.slice(startPoint * 100, startPoint * 100 + 300);
    };

    //This method uses the string that's being used with the test and the user's string for reference.
    //Source for regex:
    // https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
    //This method is ONLY called upon an update.
    // compareStrings = (testString, userString) => {
    //     //First, replace any unneeded whitespace with single spaces using regex
    //     userString = userString.replace(/\s{2,}/g,' ');
    //     let cursor = userString.length;
    //     //Then, compare the strings.
    //     let returnString = [];
    //     for (let i = 0; i < testString.length; i++) {
    //         let element = testString[i];
    //         if (i < cursor) {
    //             if (userString[i] === element) {
    //                 returnString.push(<span key={i} className="correct-words">{element}</span>);
    //             } else {
    //                 returnString.push(<span key={i} className="incorrect-words">{element}</span>);
    //             }
    //         } 
    //         else {
    //             returnString.push(<span key={i}>{element}</span>);
    //         }
    //     }
    //     return returnString;

    // }

    render() {
        return (
            <div>
                <div className="text-to-copy">
                    <p>{this.showPartOfText(this.props.highlightedText)}...</p>
                </div>
            </div>
        );
    }
}