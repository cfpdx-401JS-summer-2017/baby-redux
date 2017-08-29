
import { CHANGENAME, CHANGESALUTATION, RESET } from './greeting.constants';

export default (state = { name: '', salutation: '' }, { type, payload }) => {
    switch (type) {
        case CHANGENAME:
            return { name: payload };
        case CHANGESALUTATION:
            return { salutation: payload };
        case RESET:
            return { name: payload, salutation: payload };
        default:
            return state;
    }
};