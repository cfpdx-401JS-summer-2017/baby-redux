import { SALUTATION, NAME } from './greeter.constants';

export function changeName(name){
    return {
        type: NAME,
        payload: name
    }
}
export function changeSalutation(salutation){
    return {
        type: SALUTATION,
        payload: salutation
    }
}