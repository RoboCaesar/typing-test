import React from 'react';


export default class TypingStatus extends React.Component {

    state = {
        compareText: 'This is a string for the user to copy.',
        highlightedText: []
    }

    //method for counting words from https://stackoverflow.com/questions/18679576/counting-words-in-string
    countWords = (str) => {
        return str.split(' ')
        .filter(function(n) { return n != '' })
        .length;
    };

    // convertStringToArray = (str) => {
    //     let emptyArr = [];
    //     for (let i = 0; i < str.length; i++) {
    //         emptyArr.push(<span key={i}>{str[i]}</span>);
    //         if (i == str.length - 1) {
    //             console.log(emptyArr);
    //             return emptyArr;
    //         }
    //     }
    // }

    // componentWillMount() {
    //     let highlightObject = [];
    //     console.log(this.props.compareText);
    //     // for (let i = 0; i < this.props.compareText.length; i++) {
    //     //     highlightObject.push(<span key={i}>{this.props.compareText[i]}</span>);
    //     // }
    //     this.setState(() => ({
    //         highlightedText: this.convertStringToArray(this.props.compareText)
    //     }));

    // }


    showPartOfText = () => {
        let cursor = this.props.userStringLen;
        let startPoint = parseInt((cursor / 100), 10);
        if (startPoint * 100 < 100) {
            startPoint = 0;
        } else {
            startPoint = startPoint - 1
        }
        return this.props.highlightedText.slice(startPoint * 100, startPoint * 100 + 300);
    };
    //This method uses the string that's being used with the test and the user's string for reference.
    //Source for regex:
    // https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
    //This method is ONLY called upon an update.
    compareStrings = (testString, userString) => {
        //First, replace any unneeded whitespace with single spaces using regex
        userString = userString.replace(/\s{2,}/g,' ');
        let cursor = userString.length;
        //Then, compare the strings.
        let returnString = [];
        for (let i = 0; i < testString.length; i++) {
            let element = testString[i];
            if (i < cursor) {
                if (userString[i] === element) {
                    returnString.push(<span key={i} className="correct-words">{element}</span>);
                } else {
                    returnString.push(<span key={i} className="incorrect-words">{element}</span>);
                }
            } 
            else {
                returnString.push(<span key={i}>{element}</span>);
            }
        }
        return returnString;

    }

    render() {
        return (
            <div>
                {/* <p>Current Word Count: {this.countWords(this.props.userString)}</p> */}
                <div className="text-to-copy">
                    {/* <p>This is a <span className="correct-words">test string</span>. Please <span className="incorrect-words">ignore</span>.</p> */}
                    {/* <p>{this.props.compareText}</p> */}
                    {/* <p>{this.compareStrings(this.props.compareText, this.props.userString)}</p> */}
                    {/* <p>{this.props.highlightedText}</p> */}
                    <p>{this.showPartOfText(this.props.highlightedText)}...</p>
                </div>
            </div>
        );
    }
}