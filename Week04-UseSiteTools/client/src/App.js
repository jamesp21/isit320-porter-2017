import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeDirectory: 'Unknown',
            firstWord: 'Unknown',
            userInput: 'Unknown'
        };
        this.homeDirectory = this.homeDirectory.bind(this);
        this.firstWordChange = this.firstWordChange.bind(this);
        this.firstWord = this.firstWord.bind(this);

        //this.bar = this.bar.bind(this); if i dont use the arrow syntax, i would need this
    }

    firstWordChange(event) {
        console.log('firstWord:', event.target.value);
        this.setState({userInput: event.target.value})
    };

    getQuery() {
        const params = {sentence: this.state.userInput};
        const encodeUri = encodeURIComponent;
        let query = Object.keys(params)
            .map(key => encodeUri(key) + '=' + encodeUri(params[key]))
            .join('&');
        return query;
    };

    firstWord() {
        const that = this;
        const query = '/first-word?' + this.getQuery();
        console.log(query);
        fetch(query)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState({ firstWord: json.firstWord });
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
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
                
                <p>word change: <input type="text" onChange={this.firstWordChange} placeholder='Enter multi-word sentence.' />
                </p>
            </div>
        );
    }
}

export default App;
