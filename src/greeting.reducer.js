import { SALUTATION, NAME } from './greeting.constants';

export default (state = { salutation: 'Hello', name: 'Friend' }, { type, payload }) => {
  switch(type) {
    case SALUTATION: 
      return { salutation: state.salutation };
    case NAME:
      return { name: state.name };
    default:
      return state;
  }
};
