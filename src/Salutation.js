import React from 'react';
import { connect } from 'react-redux';
import Receiver from './containers/Receiver';

//const { createStore } = require('redux');

export function Salutation({greeting, name}) {
    return (
        <div>
            <section>
                <span>{greeting}</span>,
                <span>{name}</span>!
            </section>
            <section>
                <Receiver />
            </section>
        </div>
    );
}

export default connect(
    state => ({ greeting: state.greeting , name: state.name})
)(Salutation);