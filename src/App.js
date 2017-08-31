import React, { Component } from 'react';
import Greeter from './Greeter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hey pal, go greet yourself</h2>
        </div>
        <div>
          <Greeter/>
        </div>
      </div>
    );
  }
}

export default App;
