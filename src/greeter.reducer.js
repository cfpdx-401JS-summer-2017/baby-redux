import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeter.constants';

export default (state = { salutation: '', name: '' }, { type, payload }) => {
  switch (type) {
    case UPDATE_SALUTATION:
      return { salutation: payload };
    case UPDATE_NAME:
      return { name: payload };
    case RESET:
      return {salutation: '', name: ''}
    default:
      return state;
  }
};