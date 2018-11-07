import React from 'react';
import TypingStatus from './TypingStatus';
import textSource from './TextSource';

export default class TestingArea extends React.Component {
    state = {
        value: '',
        compareText: textSource('oliver')//"This is a string for the user to copy. It should be quite long so the user doesn't finish it."
    };

    handleUserInput = (event) => {
        const val = event.target.value;
        this.setState(() => ({value: val}));
    };

    render() {
        return (
            <div>
                <TypingStatus 
                    userString={this.state.value}
                    compareText={this.state.compareText}
                />
                <form>
                    <textarea className="typing-area" value={this.state.value} onChange={this.handleUserInput}/>
                </form>
            </div>
        );
    }
}