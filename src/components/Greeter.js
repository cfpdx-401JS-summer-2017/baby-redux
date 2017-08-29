import React from 'react';
import { connect } from 'react-redux';
import { Editor } from './Editor';

export function Greeter({salutation, name, dispatch}) {
  return (
    <div>
      <div>
        <span>{salutation}</span>&nbsp;
        <span>{name}</span>!
      </div>
      <Editor salutation={salutation} name={name} dispatch={dispatch}/>
    </div>
  );
}

export default connect(
  state => ({
  salutation: state.salutation,
  name: state.name
}))(Greeter);
