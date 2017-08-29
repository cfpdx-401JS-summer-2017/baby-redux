import { SALUTATION, NAME } from './greeter.constants';

export function changeName(name = 'joe'){
    return {
        type: NAME,
        payload: name
    }
}
export function changeSalutation(salutation = 'sup'){
    return {
        type: SALUTATION,
        payload: salutation
    }
}