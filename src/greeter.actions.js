//import { INCREMENT, DECREMENT } from './greeter.constants';

export function updateSalutation(value) {
  return {
    salutation: value
  };
}
  
export function updateName(value) {
  return {
    name: value
  };
}

export function reset() {
  return {
    salutation: '',
    name: ''
  };
}