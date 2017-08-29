import React, { Component } from 'react';
import './App.css';
import { Greeter } from './Greeter';
import GreeterEditor from './GreeterEditor';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Greeter salutation={this.props.salutation} name={this.props.name} />
          <GreeterEditor />
        </div>
      </div>
    );
  }
}

export default connect (
  state => ({ 
      salutation: state.salutation,
      name: state.name
  }))(App)