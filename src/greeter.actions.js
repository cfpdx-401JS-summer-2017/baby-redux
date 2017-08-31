import { CHANGESALUTATION, CHANGENAME, CLICK } from './greeter.constants';

export function updateSalutation(val) {
  return {
    type: CHANGESALUTATION,
    payload: val
  };
}

export function updateName(val) {
  return {
    type: CHANGENAME,
    payload: val
  };
}

export function resetForm() {
  return {
    type: CLICK
  };
}
