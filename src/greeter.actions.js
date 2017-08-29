import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeter.constants';

export function updateSalutation(value) {
  return {
    type: UPDATE_SALUTATION,
    payload: value
  };
}
  
export function updateName(value) {
  return {
    type: UPDATE_NAME, 
    payload: value
  };
}

export function reset() {
  return {
    type: RESET
  };
}