import { SALUTATION, NAME, RESET } from './greeter.constants';

export default (state = {}, {type, payload}) => {
    switch (type){
        case SALUTATION:
            return { salutation: payload, name: state.name};
        case NAME:
            return {salutation: state.salutation, name: payload};
        case RESET:
            return {salutation: '', name: ''};
        default:
            return state;
    }
}