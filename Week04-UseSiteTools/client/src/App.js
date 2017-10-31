import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            baseDir: 'Get Nine Result wikk be Placed Here',
            name: 'Unknown',
            cloudPath: 'Unknown'
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
                that.setState({
					baseDir: json.config[1].baseDir,
					name: json.config[1].name,
					cloudPath: json.config[1].cloudPath});
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
                
                <p className="App-intro">
                    name: {this.state.name}
                </p>
                
                <p className="App-intro">
                    cloudPath: {this.state.cloudPath}
                </p>
                <button onClick={this.bar}>Bar</button>
                </p>
            </div>
        );
    }
}

export default App;
