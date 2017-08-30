import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from '../../greeting.constants';
import { updateSalutation, updateName, resetGreeting } from '../../greeting.actions';
import reducer from '../../greeting.reducer.js';
import { Editor } from '../../Greeting.js';

describe('greeting', () => {

  describe('actions', () => {

    it('updates the salutation', () => {
      expect(updateSalutation('Hey')).toEqual({
        type: UPDATE_SALUTATION,
        payload: 'Hey',
      });
    });

    it('updates the name', () => {
      expect(updateName('Buddy')).toEqual({
        type: UPDATE_NAME,
        payload: 'Buddy',
      });
    });

    it('resets the greeting', () => {
      expect(resetGreeting()).toEqual({
        type: RESET,
        payload: null,
      });
    });

  });

  describe('reducers', () => {
    
    it('has default greeting of Hello Friend', () => {
      expect(reducer(undefined, { type: 'NOT-A-REAL-TYPE' })).toEqual({ salutation: 'Hello', name: 'Friend' });
    });

    it('updates salutation', () => {
      const action = updateSalutation('Ciao');
      expect(reducer({ salutation: 'Hello' }, action)).toEqual({ salutation: 'Ciao' });
    });

    it('updates name', () => {
      const action = updateName('Amico');
      expect(reducer({ name: 'Friend' }, action)).toEqual({ name: 'Amico' });
    });

  });

});
