import React, { Component } from 'react';
import './App.css';
import Greeter from './Greeter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
          <Greeter />
      </div>
    );
  }
}

export default App;
