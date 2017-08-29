import React from 'react';
// import { connect } from 'react-redux';


export function Greeter({ salutation, name }) {
    if(!salutation && !name) {
        salutation = 'Greetings';
        name = 'Human';
    }
    return (
        <div>
            <span>{salutation}</span>
            <br></br>
            <span>{name}!</span>
        </div>
    )
}

// export default connect (
//     state => ({ 
//         salutation: state.salutation,
//         name: state.name
//     }))(Greeter)