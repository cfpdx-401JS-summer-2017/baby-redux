import {UPDATESALUTATION, UPDATENAME, RESET} from './greeter.constants';

export function updateSalutation(salutation = '') {
    return {
        type: UPDATESALUTATION,
        payload: salutation
    };
}

export function updateName(name = '') {
    return {
        type: UPDATENAME,
        payload: name
    };
}

export function reset() {
    return {
        type: RESET,
        payload: null
    };
}