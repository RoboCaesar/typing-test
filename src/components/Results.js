import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const Results = (props) => (
    <Modal
        isOpen={props.finished}
        onRequestClose={props.handleCloseWindow}
        contentLabel="Selected Option"
        // closeTimeoutMS={200}
        className="results-box"
    >
        <div className="results-box">
            <h3 className="results-box--text">You're done!</h3>
            <h2>Words Per Minute: {props.finalWPM}</h2>
            <h2>Accuracy: {props.finalAcc}</h2>
            <button onClick={props.handleCloseWindow}>Try Again</button>
        </div>
    </Modal>
);

export default Results;