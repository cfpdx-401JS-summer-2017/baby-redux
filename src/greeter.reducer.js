import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeter.constants';

export default (state = { salutation: 'Hello', name: 'stranger' }, { type, payload }) => {
  switch (type) {
    case UPDATE_SALUTATION:
      return { salutation: payload, name: state.name };
    case UPDATE_NAME:
      return { salutation: state.salutation, name: payload };
    case RESET:
      return {salutation: 'Hello', name: 'stranger'};
    default:
      return state;
  }
};