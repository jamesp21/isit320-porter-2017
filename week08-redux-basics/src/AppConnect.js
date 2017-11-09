import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
// We change state by "dispatching" an action.
// You can log, serialize or store actions.

let AppConnect = ({statement, deny, verify, noComment}) => {

    return (
        <div className="App">
            <p className="App-intro">
                This AppConnect component uses Redux and connect.
            </p>
            <h1>Political Science</h1>
            {statement}

            <div>
                <button onClick={verify}>Verify</button>
                <button onClick={deny}>Deny</button>
                <button onClick={noComment}>No Comment</button>
            </div>
            <hr />
        </div>
    );
    //}
};

const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deny: () => {
            dispatch({type: 'DENY'})
        },
        verify: () => {
            dispatch({type: 'VERIFY'})
        },
        noComment: () => {
            dispatch({type: 'NO COMMENT'})
        }
    }
};

AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppConnect);

export default AppConnect;