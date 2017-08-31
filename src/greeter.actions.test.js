import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Editor from './components/Editor';

describe('greeter', () => {
  describe('reducers', () => {
    it('updates salutation', () => {
      const wrapper = shallow(
        <Editor salutation="hello" name="world" dispatch={() => {}} />
      );
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('updates name', () => {
      const wrapper = shallow(
        <Editor salutation="hello" name="larry" dispatch={() => {}} />
      );
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
