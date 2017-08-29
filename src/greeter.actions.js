import {UPDATESALUTATION, UPDATENAME, RESET} from './greeter.constants';

export function updateSalutation(salutation = '') {
    return {
        type: UPDATESALUTATION,
        payload: salutation
    };
}

export function updateName(salutation) {
    return {
        type: UPDATENAME,
        payload: salutation
    };
}

export function reset() {
    return {
        type: RESET
    };
}