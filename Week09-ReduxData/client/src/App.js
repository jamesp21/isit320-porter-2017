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

/*class App extends Component {

    getConfig() {
        const that = this;
        fetch('getConfig')
            .then(function (response) {
                return response.json();
            })
            .then(function (configSummary) {
                //console.log('parsed json', JSON.stringify(configSummary, null, 4));
                })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }*/

    let App = ({baseDir, bootswatch, siteDirs, destinationDirs, bootswatchClick, destinationDirsClick, siteDirsClick}) => {
        const sites = {siteDirs};

            return (
                <MuiThemeProvider>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                       /* <DropDownMenu
                            value={this.state.value}
                            onChange={this.handleSiteDir}
                            style={styles.customWidth}
                            autoWidth={false}
                        >
                            {items}
                        </DropDownMenu>*/
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
/*}*/

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
            dipatch({type: 'SITE_DIRS'})
        },
        bootswatchClick: () => {
            dipatch({type: 'BOOTSWATCH'})
        },
        destinationDirsClick: () => {
            dipatch({type: 'DESTINATION_DIRS'})
        }
    }
};

App = connect (
    mapDispatchToProps,
    mapStateToProps
)(App);

export default App;
