
import React from 'react';
import { connect } from 'react-redux';
import { changeName, changeSalutation } from './greeting.actions';

export function Greeting({ name, salutation, dispatch }) {
    return (
        <div>
            <div>
                <span>{salutatino}</span>
                <span>{name}</span>!
            </div>

            <div>
                <input name="name" value={name}
                    onChange={({ target }) => dispatch(changeName(target.value))} />
            </div>
            <div>
                <input name="salutation" value={salutation}
                    onChange={({ target }) => dispatch(changeSalutation(target.value))} />
            </div>
            <div>
                <button onClick={() => dispatch(reset({ name: '' }, { salutation: '' }))}>Reset</button>
            </div>
        </div>
    )
}