import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Editor } from '../../Greeting.js';

describe('<Editor /> component', () => {

  it('shows default greeting with two inputs and a button', () => {
    const wrapper = toJSON(shallow(
      <Editor />
      // <Editor salutation={null} name={null} />
      // <Editor salutation="Hallo" name="Freund" reset={() => {}} dispatch={() => {}} />
    ));
    expect(wrapper).toMatchSnapshot();
  });

});
