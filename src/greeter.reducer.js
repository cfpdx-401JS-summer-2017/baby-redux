import {UPDATESALUTATION, UPDATENAME, RESET} from './greeter.constants';

export default (state = {}, {type, payload}) => {
    switch (type) {
    case UPDATESALUTATION:
        return {salutation: payload, name: state.name};
    case UPDATENAME:
        return {salutation: state.salutation, name: payload};
    case RESET:
        return {salutation: '', name: ''};
    default:
        return state;
    }
};