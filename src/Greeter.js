import React from 'react';
import {connect} from 'react-redux';
import {updateSalutation, updateName, reset} from './greeter.actions';

export function Greeter({count, dispatch}) {
    return (
        <div>
            <div>
                {/* <span>{salutation}</span>
                <span>{name}</span>! */}
            </div>
            <div>
                <p>Salutation: </p>
                <input onChange={() => dispatch(updateSalutation())}></input>
                <p>Name: </p>
                <input onChange={() => dispatch(updateName())}></input>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </div>
    )
}

export default connect(
    state => ({salutation: state.salutation, name: state.name})
)(Greeter);