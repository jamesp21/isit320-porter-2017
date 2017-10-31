import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeDirectory: 'Unknown',
            firstWord: 'Unknown',
            userInput: 'Unknown' 
        };
        this.bar = this.bar.bind(this);
        this.homeDirectory = this.homeDirectory.bind(this);
        this.firstWordChange = this.firstWordChange.bind(this);
        this.firstWord = this.firstWord.bind(this);
    }

    bar() {
        const that = this;
        fetch('/npm-package-info')
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
	
    firstWordChange(event) {
        console.log('firstWord:', event.target.value);
        this.setState({userInput: event.target.value})
    }
    
    getQuery() {
        const params = {sentence: this.state.userInput};
        const encodeUri = encodeURIComponent;
        let query = Object.keys(params)
            .map(key => encodeUri(key) + '=' + encodeUri(params[key]))
            .join('&');
        return query;
    } 
    
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
	
	render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome Home</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.userInput}
                </p>
                <button onClick={this.homeDirectory}>Home</button>
                <button onClick={this.firstWord}>First word</button>
            </div>
        );
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('one')
);

export default App;
