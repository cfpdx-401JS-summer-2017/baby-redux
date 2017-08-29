import { SALUTATION, NAME, RESET } from './greeterEditor.constants';

export function updateSalutation( salutation = 'Hello' ) {
    return {
        type: SALUTATION,
        payload: salutation
    };
}

export function updateName( name = 'World' ) {
    return {
        type: NAME,
        payload: name
    };
}

export function resetForm() {
    return {
        type: RESET,
        payload: null
    };
}