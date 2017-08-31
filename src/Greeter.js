//eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { changeName, changeSalutation, resetAll } from './greeter.actions';
import './Greeter.css'


export function Greeter({ salutation = '', name = '', dispatch }) {
    return (
        <div>
            <div className="salutation">
                <span>{salutation}</span>
                <span> </span>
                <span>{name}</span>
            </div>
            <div className="input">
                <label> Greeting:</label><input value={salutation} onChange={(event) => dispatch(changeSalutation(event.target.value))}/>
                <label> Name:</label><input value={name} onChange={(event) => dispatch(changeName(event.target.value))} />
                <button onClick={() => dispatch(resetAll())}>Reset</button>
            </div>

        </div>
    );
}

export default connect(
    state => ({ salutation: state.salutation, name: state.name })
)(Greeter);