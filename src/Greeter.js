import React from 'react';
import {connect} from 'react-redux';
import {updateSalutation, updateName, reset} from './greeter.actions';

export function Greeter({salutation, name, dispatch}) {
    return (
        <div>
            <span>{salutation}</span>
            <span>{name}</span>!
            <p>Salutation: </p>
            <input onChange={text => dispatch(updateSalutation(text))}></input>
            <p>Name: </p>
            <input onChange={text => dispatch(updateName(text))}></input>
            <br/>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}

export default connect(
    state => ({salutation: state.salutation, name: state.name})
)(Greeter);