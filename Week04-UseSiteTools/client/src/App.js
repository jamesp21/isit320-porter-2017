import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            baseDir: 'Get Nine Result will be placed here.',
        };

        //this.bar = this.bar.bind(this); if i dont use the arrow syntax, i would need this
    }

    bar = () => {//this arrow syntax binds "this.bar" automatically
        const that = this;
        fetch('/foo')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState({baseDir: json.config[1].baseDir});
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    baseDir: {this.state.baseDir}
                </p>
                <button onClick={this.bar}>Bar</button>
            </div>
        );
    }
}

export default App;