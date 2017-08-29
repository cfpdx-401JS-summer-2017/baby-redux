
import { CHANGENAME, CHANGESALUTATION, RESET } from './greeting.constants';

export function changeName(name) {
    return {
        type: CHANGENAME,
        payload: name
    };
}

export function changeSalutation(salutation) {
    return {
        type: CHANGESALUTATION,
        payload: salutation
    };
}

export function reset() {
    return {
        type: RESET,
        payload: ''
    };
}
