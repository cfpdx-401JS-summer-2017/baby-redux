import React from 'react';
import { updateSalutation, updateName, resetForm } from '../greeter.actions';

export function Editor({ salutation, name, dispatch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="salutation"
        value={salutation}
        onChange={({ target }) =>
          dispatch(updateSalutation({ salutation: target.value, name: name }))}
      />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={({ target }) =>
          dispatch(updateName({ salutation: salutation, name: target.value }))}
      />
      <button onClick={() => dispatch(resetForm())} />
    </div>
  );
}
