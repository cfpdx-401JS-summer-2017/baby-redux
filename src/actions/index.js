import { ADD_GREETING, ADD_NAME, RESET } from '../containers/salutation.constants';

export const addGreeting = (payload) => ({
    type: ADD_GREETING,
    payload
});

export const addName = (payload) => ({
    type: ADD_NAME,
    payload
});

export const reset = () => ({
    type:RESET
});