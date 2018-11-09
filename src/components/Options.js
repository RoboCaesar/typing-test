import React from 'react';

const Options = (props) => (
    <div className="options">
        <div className="option">
            <p>The text</p>
            <select name="text" onChange={props.handleTextChange}>
                <option value="mysterious-island">Mysterious Island</option>
                <option value="oliver">Oliver Twist</option>
                <option value="tom-sawyer">Tom Sawyer</option>
                <option value="wiki-info">Text from a Wikipedia article about cheese</option>
            </select>
        </div>
        <div className="option">
            <p>Time limit</p>
            <select name="time-limit" onChange={props.handleTimeLimitChange}>
                <option value="60">1 minute</option>
                <option value="120">2 minutes</option>
                <option value="180">3 minutes</option>
            </select>
        </div>
    </div>
);

export default Options;