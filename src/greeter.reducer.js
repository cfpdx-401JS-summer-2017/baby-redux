import { SALUTATION, NAME } from './greeter.constants';

export default (state = { salutation: 'hey', name: 'joe'}, {type, payload}) => {
    switch (type){
        case SALUTATION:
            return { salutation: payload};
        case NAME:
            return {name: payload};
        default:
            return state;
    }
}