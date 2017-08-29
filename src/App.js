import React, { Component } from 'react';
import logo from './baby.svg';
import Greeter from './components/Greeter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>baby redux</h2>
        </div>
        <Greeter />
      </div>
    );
  }
}

export default App;
