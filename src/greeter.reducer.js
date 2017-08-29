import { CHANGE, CLICK } from './greeter.constants';

export default (state = {salutation:'', name:''}, {type, payload}) => {
  switch (type) {
    case CHANGE:
      return state = payload;
    case CLICK:
      return state = {salutation: '', name: ''}
    default:
      return state;
  }
};
