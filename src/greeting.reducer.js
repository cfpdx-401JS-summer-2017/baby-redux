import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeting.constants';

export default (state = { salutation: 'Hello', name: 'Friend' }, { type, payload }) => {
  switch(type) {
    case UPDATE_SALUTATION: 
      return { salutation: payload, name: state.name };
    case UPDATE_NAME:
      return { salutation: state.salutation, name: payload };
    case RESET:
      return { salutation: '', name: '' };
    default:
      return state;
  }
};
