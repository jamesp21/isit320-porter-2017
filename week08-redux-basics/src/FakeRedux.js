import React, { Component } from 'react';
import spokesman from './spokesman';
import './App.css';

class FakeRedux extends Component {

    state = spokesman(undefined, {});

    dispatch(action) {
        this.setState( (prevState) => spokesman(prevState, action));
    }

    verifyStatement = () => {
        this.dispatch({ type: 'VERIFY' });
    };

    denyEverything = () => {
        this.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.dispatch({ type: 'NO COMMENT' });
    };

    render() {
        return (
            <div className="App">
                <h1>Political Science Fake Redux</h1>

                <p>This component does not use redux. It uses something redux-like.</p>
                {this.state.statement}
                <div className="Box">
                <button onClick={this.verifyStatement}>Verify</button>
                <button onClick={this.denyEverything}>Deny</button>
                <button onClick={this.noComment}>No Comment</button>
                </div>
                <hr />
            </div>
        )
    }
}

export default FakeRedux;