import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Editor } from '../../Greeting.js';

describe('Editor', () => {

  it('shows greeting with two inputs and a button', () => {
    const wrapper = toJSON(shallow(
      <Editor salutation="Hallo" name="Freund" reset={() => {}} dispatch={() => {}} />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  // it('clears greeting when reset button is clicked', () => {
  //   const wrapper = shallow(<Editor />);
  //   expect(wrapper.find('button').simulate('click'));

  // });
  

});
