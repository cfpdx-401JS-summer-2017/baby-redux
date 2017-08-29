import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor } from './Editor';

export function Greeter({salutation, name, dispatch}) {
  Greeter.propTypes = {
    salutation: PropTypes.string,
    name: PropTypes.string,
    dispatch: PropTypes.func
  }
  return (
    <div>
      <div className="greetText">
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
