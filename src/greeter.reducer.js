import {UPDATESALUTATION, UPDATENAME, RESET} from './greeter.constants';

export default (state = {salutation: '', name: ''}, {type, payload}) => {
    switch (type) {
    case UPDATESALUTATION:
        return {salutation: payload};
    case UPDATENAME:
        return {name: payload};
    case RESET:
        return {salutation: '', name: ''};
    default:
        return state;
    }
};