import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Divider from 'material-ui/Divider';

var buttonStyle = {
    margin: '10px 10px 10px 0'
};

    let App = ({baseDir, bootswatch, siteDirs, destinationDirs, bootswatchClick, destinationDirsClick, siteDirsClick}) => {
        const sites = {siteDirs};

            return (
                <MuiThemeProvider>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>

                        <RaisedButton
                            style={buttonStyle}
                            primary={true}
                            onClick={bootswatchClick}
                            label="Bootswatch">
                        </RaisedButton>
                        <RaisedButton
                            style={buttonStyle}
                            primary={true}
                            onClick={siteDirsClick}
                            label="SiteDirs">
                        </RaisedButton>
                        <RaisedButton
                            style={buttonStyle}
                            primary={true}
                            onClick={destinationDirsClick}
                            label="DestinationDirs">
                        </RaisedButton>
                    </div>
                </MuiThemeProvider>
            );
    };

const mapStateToProps = (state) => {
    return{
        baseDir: state.baseDir,
        bootswatch: state.bootswatch,
        siteDirs: state.siteDirs,
        destinationDirs: state.destinationDirs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        siteDirsClick: () => {
            dispatch({type: 'SITE_DIRS'})
        },
        bootswatchClick: () => {
            dispatch({type: 'BOOTSWATCH'})
        },
        destinationDirsClick: () => {
            dispatch({type: 'DESTINATION_DIRS'})
        }
    }
};

App = connect (
    mapDispatchToProps,
    mapStateToProps
)(App);

export default App;
