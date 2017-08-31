import reducer from './greeter.reducer';
import { SALUTATION, NAME, RESET } from './greeter.constants';
import { changeName, changeSalutation, resetAll } from './greeter.actions';

describe('Greeter', () => {

    describe('actions', () => {
        it('changeName takes a payload', () => {
            expect(changeName('bob')).toEqual({
                type: NAME,
                payload: 'bob'
            });
        });

        it('changeSalutation takes a payload', () => {
            expect(changeName('top of the morning')).toEqual({
                type: NAME,
                payload: 'top of the morning'
            });
        });
    });

    describe('reducers', () => {
        it('changes name', () => {
            const action = changeName('meryl');
            expect(reducer({ name: ''}, action)).toEqual({name: 'meryl'});
        });

        it('changes salutation', () => {
            const action = changeSalutation('hola');
            expect(reducer({ salutation: ''}, action)).toEqual({salutation: 'hola'});
        });
        
        it('resets', () => {
            const action = resetAll();
            expect(reducer({ salutation: 'hey', name: 'gal'}, action)).toEqual({salutation: '', name: ''});
        });

        
    });

});