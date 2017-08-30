
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Greeting } from '../components/greeting';

describe('Greeting', () => {

  it('displays empty input fields and reset button', () => {
    const wrapper = shallow(<Greeting />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('displays "Hello John!" in proper span tags', () => {
    const wrapper = shallow(<Greeting name="John" salutation="Hello" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});