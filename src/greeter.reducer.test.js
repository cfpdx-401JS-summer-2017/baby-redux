import reducer from './greeter.reducer';
import {CHANGE, CLICK} from './greeter.constants';
import { updateSalutation, updateName, resetForm } from './greeter.actions';

describe('greeter', () => {

describe('reducers', () => {

  it('change has empty default values', () => {
    expect(updateName(null)).toEqual({
      type: CHANGE,
      payload: null
    })

  })

})



})

