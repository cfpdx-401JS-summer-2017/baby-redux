import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Greeter } from './Greeter';
import { 
    updateSalutation, 
    updateName, 
    resetForm 
    } from './greeterEditor.actions';
import { SALUTATION, NAME, RESET } from './greeterEditor.constants';
import reducer from './greeterEditor.reducer';


describe('Greeter App', () => {

    describe('Greeter component', () => {
        
        it('displays a default greeting', () => {
            const wrapper = shallow(<Greeter />);
            expect(toJSON(wrapper)).toMatchSnapshot();
        });
        
        it('displays an updated greeting', () => {
            const wrapper = shallow(<Greeter salutation={'Howdy'} name={'pardner'}/>)
            expect(toJSON(wrapper)).toMatchSnapshot();
        });
        
    })

    describe('actions', () => {

        it('updateSalutation has a default salutation of "Hello"', () => {
            expect(updateSalutation()).toEqual({
                type: SALUTATION,
                payload: 'Hello'
            });
        });

        it('updateSalutation takes a salutation payload', () => {
            expect(updateSalutation('Heya')).toEqual({
                type: SALUTATION,
                payload: 'Heya'
            });
        });

        it('updateName has a default name of "World"', () => {
            expect(updateName()).toEqual({
                type: NAME,
                payload: 'World'
            });
        });

        it('updateName takes a name payload', () => {
            expect(updateName('Charles')).toEqual({
                type: NAME,
                payload: 'Charles'
            });
        });

        it('resetForm returns an object with a null payload', () => {
            expect(resetForm()).toEqual({
                type: RESET,
                payload: null
            });
        });

    });

    describe('reducers', () => {

        it('Has a default value of null', () => {
            expect(reducer(undefined, { type: 'DUMMY' })).toEqual({ salutation: '', name: ''});
        });

        it('updateSalutation', () => {
            const action = updateSalutation('Bonjour');
            expect(reducer({ salutation: '', name: ''}, action)).toEqual({ salutation: 'Bonjour', name: ''});
        });

        it('updateName', () => {
            const action = updateName('Michele');
            expect(reducer({salutation: '', name: ''}, action)).toEqual({ salutation: '', name: 'Michele'});
        });

        it('resetForm', () => {
            const action = resetForm();
            expect(reducer({ salutation: 'Greetings', name: 'Human'}, action)).toEqual({ salutation: '', name: '' });
        });

    })

});