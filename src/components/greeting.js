
import React from 'react';
import { connect } from 'react-redux';
import { changeName, changeSalutation, reset } from '../greeting.actions';

export function Greeting({ name, salutation, dispatch }) {
    return (
        <div>
            <div>
                <span>{salutation} </span>
                <span>{name}</span>!
            </div>

            <div>
                <label> Salutation <input value={salutation} 
                    onChange={({ target }) => dispatch(changeSalutation(target.value))} /></label>
            </div>
            <div>
                <label> Name <input name="name" value={name}
                    onChange={({ target }) => dispatch(changeName(target.value))} /></label>
            </div>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        name: state.name,
        salutation: state.salutation
    })
)(Greeting);