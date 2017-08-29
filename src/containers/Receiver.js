import React from 'react';
import { connect } from 'react-redux';
import { addGreeting, addName, reset } from '../actions';

let Receiver = ({ dispatch, greeting, name }) => {
    return(
        <div>
            <section>
                <input value={greeting} onChange={({target}) => {
                    dispatch(addGreeting(target.value));
                }}/>
            </section>
            <section>
                <input value={name} onChange={({target}) => {
                    dispatch(addName(target.value));
                }}/>
            </section>
            <button type="submit"onClick={({target}) => {
                dispatch(reset());
            }}>
                    Clear
            </button>
            <section>
            </section>
        </div>
    );
};
//Caution: only doable with small state
export default Receiver = connect((state) => state)(Receiver);
