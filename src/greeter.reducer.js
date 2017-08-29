import { CHANGE, CLICK } from './greeter.constants';

export default (state = {salutation:'hello', name:'tex'}, {type, payload}) => {
  console.log('in reducer: ',type, payload);
  switch (type) {
    case CHANGE:
      if (type === 'onChangeName') return {name: payload}
      else return {salutation: payload}
    case CLICK:
      return state = {salutation: '', name: ''}
    default:
      return state;
  }
};
