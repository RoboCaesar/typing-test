import React from 'react';
import Select from 'react-select';

const choices = [
    {value: '600', label: '1 minute'},
    {value: '1200', label: '2 minute'},
    {value: '1800', label: '3 minute'},
]

const texts = [
    {value: 'mysterious-island', label:'Mysterious Island'},
    {value: 'oliver', label:'Oliver Twist'},
    {value: 'tom-sawyer', label:'Tom Sawyer'},
    {value: 'wiki-info', label:'Text from a Wikipedia article about cheese'},
]


// const Options = (props) => (
//     <div className="options">
//         {/* <div className="option">
//             <p className="option--text">The text</p>
//             <select name="text" onChange={props.handleTextChange}>
//                 <option value="mysterious-island">Mysterious Island</option>
//                 <option value="oliver">Oliver Twist</option>
//                 <option value="tom-sawyer">Tom Sawyer</option>
//                 <option value="wiki-info">Text from a Wikipedia article about cheese</option>
//             </select>
//         </div>
//         <div className="option">
//             <p className="option--text">Time limit</p>
//             <select name="time-limit" onChange={props.handleTimeLimitChange}>
//                 <option value="600">1 minute</option>
//                 <option value="1200">2 minutes</option>
//                 <option value="1800">3 minutes</option>
//             </select>
//         </div> */}
//         <div className="option">
//             <p className="option--text">Text</p>
//             <Select
//                 options={texts}
//                 className="option--select"
//             />
//         </div>
//         <div className="option">
//             <p className="option--text">Time Limit</p>
//             <Select
//                 options={choices}
//                 className="option--select"
//             />
//         </div>
//     </div>
// );

class Options extends React.Component {
    render() {
        return (
            <div className="options">
                <div className="option">
                    <p className="option--text">Text</p>
                    <Select
                        options={texts}
                        className="option--select"
                        onChange={this.props.handleTextChange}
                    />
                </div>
                <div className="option">
                    <p className="option--text">Time Limit</p>
                    <Select
                        options={choices}
                        className="option--select"
                        onChange={this.props.handleTimeLimitChange}
                    />
                </div>
            </div>
        );
    }
}

export default Options;