import { CHANGE, CLICK } from './greeter.constants';

export function updateSalutation(val) {
  console.log('updateSalutation: ', val);
  return {
    type: CHANGE,
    payload: val
  };
}

export function updateName(val) {
  console.log('updateName: ', val);
  return {
    type: CHANGE,
    payload: val
  };
}

export function resetForm() {
  console.log('resetForm: ');
  return {
    type: CLICK
  };
}
