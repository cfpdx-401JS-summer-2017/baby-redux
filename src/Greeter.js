import React from 'react';
import { connect } from 'react-redux';
import { updateSalutation, updateName, reset } from './greeter.actions';

export function Greeter({ name, salutation, dispatch }) {
  return (
    <div id="greeter">
      <div id="greeting">
        <span>{salutation} </span>
        <span>{name}</span>!
      </div>

      <form>
        <label for="salutation">Salutation:</label> <input id="salutation" onChange={event => dispatch(updateSalutation(event.target.value))} /> <label for="name">Name:</label> <input id="name" onChange={event => dispatch(updateName(event.target.value))} /> <button type="reset" onClick={() => dispatch(reset())}>Reset</button>
      </form>
    </div>
  );
}

export default connect(
  state => ({ 
    salutation: state.salutation,
    name: state.name
  })
)(Greeter);