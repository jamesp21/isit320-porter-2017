import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            "packageInfo": 'Get Nine Result will be placed here.',
        };
        this.bar = this.bar.bind(this);
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

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome Home</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.packageInfo}
                </p>
                <button onClick={this.bar}>Home</button>
                <button onClick={this.bar}>First word</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

export default App;