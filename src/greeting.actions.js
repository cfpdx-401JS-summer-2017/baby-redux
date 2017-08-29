import { SALUTATION, NAME } from './greeting.constants';

export function updateSalutation(value) {
  console.log('salutation was updated to', value);
  return {
    type: SALUTATION,
    payload: value,
  };
}

export function updateName(value) {
  console.log('name was updated to', value);
  return {
    type: NAME,
    payload: value,
  };
}

export function reset() {
  console.log('reset');
  return {
    type: SALUTATION,
    payload: '',
  },{
    type: NAME,
    payload: '',
  };
}