import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Greeter } from './Greeter';

describe('Greeter', () => {

  it('defaults to Hello stranger', () => {
    const wrapper = shallow(<Greeter />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('updates salutation', () => {
    const wrapper = shallow(<Greeter salutation='Howdy' />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('updates name', () => {
    const wrapper = shallow(<Greeter name='Pardner' />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});