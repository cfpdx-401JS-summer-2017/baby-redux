
import { CHANGENAME, CHANGESALUTATION, RESET } from './greeting.constants';

export default (state = { name: '', salutation: '' }, { type, payload }) => {
    switch (type) {
        case CHANGENAME:
            return { name: payload, salutation: state.salutation };
        case CHANGESALUTATION:
            return { salutation: payload, name: state.name };
        case RESET:
            return { name: payload, salutation: payload };
        default:
            return state;
    }
};