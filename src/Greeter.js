import React from 'react';
import { connect } from 'react-redux';
// import { greet } from './greeter.actions';

export function Greeter({ salutation = 'Hello', name = 'World' }) {
    return (
        <div>
            <span>{salutation}</span>
            <span>{name}!</span>
        </div>
    )
}