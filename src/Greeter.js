//eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Greeter extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>Hey</div>
        );
    }
}

export default Greeter;