import reducer from './greeter.reducer';
import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeter.constants';
import { updateSalutation, updateName, reset } from './greeter.actions';

describe('greeter', () => {

  describe('actions', () => {

    it('updates salutation', () => {
      expect(updateSalutation('Howdy')).toEqual({ 
        type: UPDATE_SALUTATION,
        payload: 'Howdy'
      });
    });

    it('updates name', () => {
      expect(updateName('Pardner')).toEqual({ 
        type: UPDATE_NAME,
        payload: 'Pardner'
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
      expect(reducer(undefined, { type: 'DUMMY' })).toEqual({ salutation: 'Hello', name: 'stranger' });
    });

    it('UPDATE_SALUTATION', () => {
      const action = updateSalutation('Hi There');
      expect(reducer({ salutation: '' }, action)).toEqual({ salutation: 'Hi There' });
    });

    it('UPDATE_NAME', () => {
      const action = updateName('Person');
      expect(reducer({ name: '' }, action)).toEqual({ name: 'Person' });
    });

  });

});