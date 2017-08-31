
import reducer from '../greeting.reducer';
import { CHANGENAME, CHANGESALUTATION, RESET } from '../greeting.constants';
import { changeName, changeSalutation, reset } from '../greeting.actions';

describe('Greeting', () => {

    describe('actions', () => {

        it('changeName takes a string name payload', () => {
            expect(changeName('Mark')).toEqual({
                type: CHANGENAME,
                payload: 'Mark'
            })
        });

        it('changeSalutation takes a string salutation payload', () => {
            expect(changeSalutation('Hello')).toEqual({
                type: CHANGESALUTATION,
                payload: 'Hello'
            })
        });

        it('reset sends an empty string payload to name and salutation', () => {
            expect(reset()).toEqual({
                type: RESET,
                payload: ''
            })
        });

        describe('reducers', () => {

            it('CHANGENAME', () => {
                const action = changeName('Fred');
                expect(reducer({ name: 'Mark' }, action)).toEqual({ name: 'Fred' });
            })
        });

        it('CHANGESALUTATION', () => {
            const action = changeSalutation('Bonjour');
            expect(reducer({ salutation: 'Hello' }, action)).toEqual({ salutation: 'Bonjour' });
        });

        it('RESET', () => {
            const action = reset();
            expect(reducer({ salutation: 'Hello', name: 'Fred' }, action)).toEqual({ salutation: '', name: '' });
        });
    });
});