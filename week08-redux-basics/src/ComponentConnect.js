import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class ComponentConnect extends Component {

    verifyStatement = () => {
        this.props.dispatch({ type: 'VERIFY' });
    };

    // IMPLEMENT denyEverything AND noComment HERE.

    denyEverything = () => {
        this.props.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.props.dispatch({ type: 'NO COMMENT' });
    };

    render() {
        return (
            <div className="App">
                <h1>Political Science Props Redux in App</h1>
                <p>This component uses redux.</p>
                {this.props.statement}

                <div className="Box">
                    <button onClick={this.verifyStatement}>Verify</button>
                    <button onClick={this.denyEverything}>Deny</button>
                    <button onClick={this.noComment}>No Comment</button>
                </div>
                <hr />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

ComponentConnect = connect(mapStateToProps)(ComponentConnect);

export default ComponentConnect;
