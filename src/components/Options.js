import React from 'react';

const Options = (props) => (
    <div className="options">
        <div className="option">
            <p>The text</p>
            <select name="text" onChange={props.handleTextChange}>
                <option value="iliad">Mysterious Island</option>
                <option value="macbeth">Oliver Twist</option>
                <option value="news">Tom Sawyer</option>
                <option value="wikipedia">Text from a Wikipedia article about cheese</option>
            </select>
        </div>
        <div className="option">
            <p>Time limit</p>
            <select name="time-limit">
                <option value="1">1 minute</option>
                <option value="2">2 minutes</option>
                <option value="3">3 minutes</option>
            </select>
        </div>
    </div>
);

export default Options;