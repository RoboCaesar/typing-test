import React from 'react';
import TypingStatus from './TypingStatus';

export default class TestingArea extends React.Component {
    state = {
        value: ''
    };
    render() {
        return (
            <div>
                <TypingStatus />
                <p>Here there will be some text for the user to copy while typing.</p>
                <form>
                    <textarea className="typing-area"/>
                </form>
            </div>
        );
    }
}