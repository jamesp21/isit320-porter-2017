import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var buttonStyle = {
    margin: '15px'
};

class App extends Component {

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
    }

  render() {
    return (
        <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <DropDownMenu
              value={this.state.value}
              onChange={this.handleSiteDir}
              style={styles.customWidth}
              autoWidth={false}
          >
              {items}
          </DropDownMenu>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
