import { ADD_GREETING, ADD_NAME, RESET } from './salutation.constants';

export default (state = {greeting:'Hello',name:'Stranger'}, {type, payload }) => {
    switch (type) {
    case RESET:
        return {greeting: 'Hello', name: 'Stranger'};
    case ADD_GREETING:
        return {greeting: payload, name: state.name};
    case ADD_NAME:
        return {name: payload, greeting: state.greeting};
    default:
        return state;
    }
};