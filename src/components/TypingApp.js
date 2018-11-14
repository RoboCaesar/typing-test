import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import TestingArea from './TestingArea';

export default class TypingApp extends React.Component {
    state = {
        disabled: false
    }

    disableTest = () => {
        this.setState(() => ({
            disabled: true
        }));
    }

    enableTest = () => {
        this.setState(() => ({
            disabled: false
        }));
    }

    render() {
        return (
            <div className={this.state.disabled == true ? "blurred-background" : ""}>
                <Header/>
                <div className="app-container">
                    <Instructions/>
                    <TestingArea
                        disableTest = {this.disableTest}
                        enableTest = {this.enableTest}
                    />
                </div>
            </div>
        );
    }
}