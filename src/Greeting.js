import React from 'react';
import { connect } from 'react-redux';
import { updateSalutation, updateName, reset } from './greeting.actions';

export function Greeting({ salutation, name }) {
  return (
    <div>
      <span>{salutation}</span>
      <span>{name}</span>!
    </div>
  );
}

export default connect(state => (
  {
    salutation: state.salutation,
    name: state.name
  }
))(Greeting);

export function Editor({ dispatch }) {
  return (
    <div>
      <label>
        Salutation:
        <input type="text" onChange={({target}) => dispatch(updateSalutation(target.value))} />
      </label>
      <br/>
      <label>
        Name:
        <input type="text" onChange={({target}) => dispatch(updateName(target.value))} />
      </label>
      <br/>
      <button onClick={() => reset()} >Reset</button>
    </div>
  );
}
