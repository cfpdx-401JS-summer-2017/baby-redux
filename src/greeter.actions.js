import { CHANGE, CLICK } from './greeter.constants';

export function updateSalutation(val) {
  return {
    type: CHANGE,
    payload: val
  };
}

export function updateName(val) {
  return {
    type: CHANGE,
    payload: val
  };
}

export function resetForm() {
  return {
    type: CLICK
  };
}
