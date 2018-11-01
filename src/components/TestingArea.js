import React from 'react';

export default class TestingArea extends React.Component {
    state = {
        value: ''
    };
    render() {
        return (
            <div>
                <p>Here there will be some text for the user to copy while typing.</p>
                <form>
                    <label>
                        Type here:
                        <textarea />
                    </label>
                </form>
            </div>
        );
    }
}