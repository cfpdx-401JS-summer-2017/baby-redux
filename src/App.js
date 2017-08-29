import React, { Component } from 'react';
import logo from './logo.svg';
import Greeter from './components/Greeter';
import './App.css';

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Greeter />
      </div>
    );
  }
}

export default App;
