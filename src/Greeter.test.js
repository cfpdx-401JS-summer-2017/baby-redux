import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {Greeter} from './Greeter';

describe('Greeter', () => {
    it('displays all expected elements', () => {
        const wrapper = shallow(<Greeter />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});