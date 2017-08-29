import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting, Editor } from './Greeting.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Baby Redux</h2>
        </div>
        <br/>
        <Greeting />
        <br/>
        <Editor />
      </div>
    );
  }
}

export default App;
