//eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { changeName, changeSalutation, resetAll } from './greeter.actions';


export function Greeter({ salutation, name, dispatch }) {
    return (
        <div>
            <div>
                <span>{salutation}</span>
                <span>{name}</span>
            </div>
            <label> Greeting<input onChange={(event) => dispatch(changeSalutation(event.target.value))} /></label>
            <label> Name<input onChange={(event) => dispatch(changeName(event.target.value))} /></label>

            <button onClick={() => dispatch(resetAll())}>Reset</button> 

        </div>
    );
}

export default connect(
    state => ({ salutation: state.salutation, name: state.name })
)(Greeter);