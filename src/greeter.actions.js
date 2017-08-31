import { SALUTATION, NAME, RESET } from './greeter.constants';

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

export function resetAll(){
    return {
        type: RESET,
        payload: null
    }
}