import React, { Component } from 'react';
import './App.css';
import Greeter from './Greeter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Greeter App</h2>
        </div>
        <div className="Greeter">
          <Greeter />
        </div>
      </div>
    );
  }
}

export default App;
