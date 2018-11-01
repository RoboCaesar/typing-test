import React from 'react';

const Options = (props) => (
    <div className="options">
        <p>The text</p>
        <select name="text" onChange={props.handleTextChange}>
            <option value="iliad">The Iliad</option>
            <option value="macbeth">MacBeth</option>
            <option value="news">Some Recent News</option>
            <option value="wikipedia">Text from a Wikipedia article</option>
        </select>
        <p>Time limit</p>
        <select name="time-limit">
            <option value="1">1 minute</option>
            <option value="2">2 minutes</option>
            <option value="3">3 minutes</option>
            <option value="4">4 minutes</option>
        </select>
    </div>
);

export default Options;