import React from 'react';
import {connect} from 'react-redux';
import {updateSalutation, updateName, reset} from './greeter.actions';

export function Greeter({salutation = '', name = '', dispatch}) {
    return (
        <div>
            <span>{salutation}, </span>
            <span>{name}</span>!
            <p>Salutation: </p>
            <input value={salutation} onChange={({target}) => dispatch(updateSalutation(target.value))}></input>
            <p>Name: </p>
            <input value={name} onChange={({target}) => dispatch(updateName(target.value))}></input>
            <br/>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default connect(
    state => ({salutation: state.salutation, name: state.name})
)(Greeter);