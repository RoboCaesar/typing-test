import React from 'react';
import Select from 'react-select';

const choices = [
    
]

const Options = (props) => (
    <div className="options">
        <div className="option">
            <p className="option--text">The text</p>
            <select name="text" onChange={props.handleTextChange} className="option--select">
                <option value="mysterious-island">Mysterious Island</option>
                <option value="oliver">Oliver Twist</option>
                <option value="tom-sawyer">Tom Sawyer</option>
                <option value="wiki-info">Text from a Wikipedia article about cheese</option>
            </select>
        </div>
        <div className="option--text">
            <p>Time limit</p>
            <select name="time-limit" onChange={props.handleTimeLimitChange} className="option--select">
                <option value="600">1 minute</option>
                <option value="1200">2 minutes</option>
                <option value="1800">3 minutes</option>
            </select>
        </div>
    </div>
);

export default Options;