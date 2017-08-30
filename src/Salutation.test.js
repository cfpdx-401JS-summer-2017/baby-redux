import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Salutation } from './Salutation';

describe('Counter', () => {

    it('shows a greeting and two inputs', () => {
        const wrapper = shallow(<Salutation />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});