import React from 'react';
import './App.css';

let TwoPartJsx = ({statement, kind, deny, verify, noComment}) => {

    return (
        <div className="App">
            <h1>Two Parts: Code and JSX</h1>
            <p className="App-intro">
                This AppConnect component uses Redux and connect.
                The connect bits are in a separate files.
            </p>

            <p><strong>Statement: </strong>{statement}</p>
            <p><strong>Kind: </strong>{kind}</p>
            <div className="Box">
                <button onClick={verify}>Verify</button>
                <button onClick={deny}>Deny</button>
                <button onClick={noComment}>No Comment</button>
            </div>
            <hr/>
        </div>
    );
};

export default TwoPartJsx;