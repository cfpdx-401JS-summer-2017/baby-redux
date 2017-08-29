import React from 'react';
import { connect } from 'react-redux';
import { 
    updateSalutation,
    updateName,
    resetForm
    } from './greeterEditor.actions';


export function GreeterEditor({ salutation = '', name = '', dispatch }) {
    return (
        <div>
            <form>
                <label>Salutation:</label>
                <input value={salutation} onChange={(event) => dispatch(updateSalutation(event.target.value))}></input>
                <br></br>
                <label>Name:</label>
                <input value={name} onChange={(event) => dispatch(updateName(event.target.value))}></input>
                <br></br>
                <button onClick={(event) => {
                    event.preventDefault();
                    return dispatch(resetForm());
                    }}>Reset</button>
            </form>
        </div>
    )
}

export default connect (
    state => ({ 
        salutation: state.salutation,
        name: state.name
    }))(GreeterEditor)