
import { CHANGENAME, CHANGESALUTATION } from './greeting.constants';

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

    export function reset(name, salutation) {
        return {
            type: RESET,
            payload: { name, salutation }
        }
    }
}