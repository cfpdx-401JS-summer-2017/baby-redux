import { CHANGENAME, CHANGESALUTATION, CLICK } from './greeter.constants';
import { updateSalutation, updateName, resetForm } from './greeter.actions';

describe('greeter', () => {
  describe('actions', () => {
    it('change has empty default values', () => {
      expect(updateName(null)).toEqual({
        type: CHANGENAME,
        payload: null
      });
      expect(updateSalutation(null)).toEqual({
        type: CHANGESALUTATION,
        payload: null
      });
    });

    it('reset the form makes state empty', () => {
      expect(resetForm()).toEqual({
        type: CLICK
      });
    });
  });
});
