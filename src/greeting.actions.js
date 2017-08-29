import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeting.constants';

export function updateSalutation(value) {
  return {
    type: UPDATE_SALUTATION,
    payload: value,
  };
}

export function updateName(value) {
  return {
    type: UPDATE_NAME,
    payload: value,
  };
}

export function resetGreeting() {
  return {
    type: RESET,
    payload: null
  };
}
