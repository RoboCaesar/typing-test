import React from 'react';

export default class TypingStatus extends React.Component {

    state = {
        compareText: 'This is a string for the user to copy.'
    }

    //method for counting words from https://stackoverflow.com/questions/18679576/counting-words-in-string
    countWords = (str) => {
        return str.split(' ')
        .filter(function(n) { return n != '' })
        .length;
    };

    //This method uses the string that's being used with the test and the user's string for reference.
    //Source for regex:
    // https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
    //This method is ONLY called upon an update.
    compareStrings = (testString, userString) => {
        //First, replace any unneeded whitespace with single spaces using regex
        userString = string.replace(/\s{2,}/g,' ');
        let cursor = userString.length;
        //Then, compare the strings.
        let highlightedSlice = testString.slice(0, cursor);

        //iterate through highlighted slice. If it's a correct part, return 1, if not, return -1
        //Then slice again?
    }

    render() {
        return (
            <div>
                <p>Current Word Count: {this.countWords(this.props.userString)}</p>
                <div className="text-to-copy">
                    <p>This is a <span className="correct-words">test string</span>. Please <span className="incorrect-words">ignore</span>.</p>
                    <p>{this.props.compareText}</p>
                </div>
            </div>
        );
    }
}