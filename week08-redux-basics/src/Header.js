import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Redux Explorer</h1>
                </header>
            </div>
        );
    }
}

export default Header;
