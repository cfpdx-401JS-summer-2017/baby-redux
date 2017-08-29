import React from 'react';
import { connect } from 'react-redux';
import { updateSalutation, updateName, reset } from './greeter.actions';

export function Greeter({ name, salutation, dispatch }) {
  return (
    <div>
      <span>{salutation}</span>
      <span>{name}</span>!

      <form>
        Salutation: <input onChange={event => dispatch(updateSalutation(event.target.value))} />
        Name: <input onChange={event => dispatch(updateName(event.target.value))} />
        <button onClick={() => dispatch(reset())}>Reset</button>
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