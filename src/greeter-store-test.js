import reducer from './greeter.reducer';
import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeter.constants';
import { updateSalutation, updateName, reset } from './greeter.actions';

describe('greeter', () => {

  describe('actions', () => {

    it('updates salutation', () => {
      expect(updateSalutation('Hello')).toEqual({ 
        type: UPDATE_SALUTATION,
        payload: 'Hello'
      });
    });

    it('updates name', () => {
      expect(updateName('Biff')).toEqual({ 
        type: UPDATE_NAME,
        payload: 'Biff'
      });
    });

    it('resets salutation and name', () => {
      expect(reset()).toEqual({ 
        type: RESET
      });
    });

  });

  describe('reducers', () => {

    it('Has default value', () => {
      expect(reducer(undefined, { type: 'DUMMY' })).toEqual({ salutation: '', name: '' });
    });

    it('UPDATE_SALUTATION', () => {
      const action = updateSalutation('Howdy');
      expect(reducer({ salutation: '' }, action)).toEqual({ salutation: 'Howdy' });
    });

    it('UPDATE_NAME', () => {
      const action = updateSalutation('Monty');
      expect(reducer({ name: '' }, action)).toEqual({ name: 'Monty' });
    });

  });

});