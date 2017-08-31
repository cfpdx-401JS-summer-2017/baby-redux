import reducer from './containers/salutation.reducer';
import { ADD_GREETING, ADD_NAME, RESET } from './containers/salutation.constants';
import { addGreeting, addName, reset} from './actions/index';

describe('counter', () => {

    describe('actions', () => {
        it('addGreeting takes a string payload',() => {
            expect(addGreeting('Whut up')).toEqual({
                type: ADD_GREETING,
                payload: 'Whut up'
            });
        });
        it('addName takes a string payload', () => {
            expect(addName('hombre')).toEqual({
                type: ADD_NAME,
                payload: 'hombre'
            });
        });
        it('rest will change name and greeting back to default', () => {
            expect(reset()).toEqual({
                type:RESET
            });
        });
        it('addGreeting has a default state of Hello',() => {
            expect(addGreeting()).toEqual({
                type: ADD_GREETING,
                payload: undefined
            });
        });
        it('addName has a default state of Stranger',() => {
            expect(addName()).toEqual({
                type: ADD_NAME,
                payload: undefined
            });
        });
    });

    describe('reducers', () => {

        it('Has default value of ',() => {
            expect(reducer(undefined, {type: 'DUMMY'}))
                .toEqual({greeting: 'Hello', name: 'Stranger'});
        });
        it('ADD_GREETING',() => {
            const action = addGreeting('Yo');
            expect(reducer(ADD_GREETING, action))
                .toEqual({greeting: 'Yo', name: undefined});
        });
        it('ADD_NAME',() => {
            const action = addName('Ms.Frizzle');
            expect(reducer(ADD_NAME, action))
                .toEqual({greeting: undefined, name: 'Ms.Frizzle'});
        });
    });

});