import { CHANGENAME, CHANGESALUTATION, CLICK } from './greeter.constants';

export default (state = {salutation:'', name:''}, {type, payload}) => {
  switch (type) {
    case CHANGENAME:
      return state.name = payload;
      case CHANGESALUTATION:
      return state.salutation = payload;
    case CLICK:
      return state = {salutation: '', name: ''}
    default:
      return state;
  }
};
