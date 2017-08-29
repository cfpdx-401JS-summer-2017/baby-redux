import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Greeter } from './Greeter';

describe('Greeter', () => {

  it('updates salutation and name', () => {
    const wrapper = shallow(<Greeter salutation='Howdy' name='Pardner' />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('resets salutation and name', () => {
    const wrapper = shallow(<Greeter salutation='Hello' name='Stranger' />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});