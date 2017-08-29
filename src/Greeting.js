import React from 'react';
import { connect } from 'react-redux';
import { updateSalutation, updateName, resetGreeting } from './greeting.actions';

export function Editor({ salutation, name, reset, dispatch }) {
  return (
    <div>
      <div>
        <span>{salutation}</span> <span>{name}</span>!
      </div>
      <label>
        Salutation:
        <input type="text" value={salutation} onChange={({target}) => dispatch(updateSalutation(target.value))} />
      </label>
      <br/>
      <label>
        Name:
        <input type="text" value={name} onChange={({target}) => dispatch(updateName(target.value))} />
      </label>
      <br/>
      <button onClick={() => dispatch(resetGreeting())} >Reset</button>
    </div>
  );
}

export default connect(state => (
  {
    salutation: state.salutation,
    name: state.name,
    reset: state.reset,
  }
))(Editor);
