import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const Results = (props) => (
    <Modal
        isOpen={props.finished}
        onRequestClose={props.handleCloseWindow}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="results-box"
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 25, 0.75)'
            }
        }}
    >
        <div>
            <h3 className="results-box--text">You're done!</h3>
            <h2>Words Per Minute: {props.finalWPM}</h2>
            <h2>Accuracy: {props.finalAcc}</h2>
            <button onClick={props.handleCloseWindow} className="results-box--button">Try Again</button>
        </div>
    </Modal>
);

export default Results;