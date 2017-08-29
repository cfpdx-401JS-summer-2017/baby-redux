import { SALUTATION, NAME, RESET } from './greeterEditor.constants';


export default ( state = { salutation: null, name: null }, { type, payload }) => {
    switch (type) {
        case SALUTATION:
            return { 
                salutation: payload,
                name: state.name
            }
        case NAME: 
            return {
                salutation: state.salutation,
                name: payload
            }
        case RESET:
            return {
                salutation: null,
                name: null
            }
        default:
            return state;
    }
};