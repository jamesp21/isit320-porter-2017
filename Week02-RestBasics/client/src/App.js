import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            foo: 'waiting'
        };
        this.bar = this.bar.bind(this);
        this.getFile = this.getFile.bind(this);
    }

    bar() {
        const that = this;
        fetch('/api/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    };

    getFile() {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'});
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    State: {this.state.foo}
                </p>
                <p className="App-intro">
                    File: {this.state.file}
                </p>
                <button id='getFile' onClick={this.getFile}>Get File</button>
            </div>
        );
    }
}

export default App;
