import React from 'react';
import ReactDOM from 'react-dom';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <h1>All About Me!</h1>
        <button onClick={this.firstWord} />
        <button />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />,
               document.getElementById('app'));
