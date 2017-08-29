//eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { changeName, changeSalutation } from './greeter.actions';


export function Greeter({ salutation, name, dispatch }) {
    return (
        <div>
            <div>
                <span>{salutation}</span>
                <span>{name}</span>
            </div>
            <label> Greeting<input onChange={() => dispatch(changeSalutation())} /></label>
            <label> Name<input onChange={() => dispatch(changeName())} /></label>

            {/* <button onClick={}></button> //reset */}

        </div>
    );
}

export default connect(
    state => ({ salutation: state.salutation, name: state.name })
)(Greeter);