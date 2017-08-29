import {CHANGE, CLICK} from './greeter.constants';

export function updateSalutation(val) {
  console.log('onChangeSal: ', val);
  return {
    type: CHANGE,
    payload: val
  }

}

export function updateName(val) {
  console.log('onChangeName: ', val);
  return {
    type: CHANGE,
    payload: val
  }

}

export function resetForm() {
  console.log('submitNewGreeting: ');
  return {
    type: CLICK
  }
}