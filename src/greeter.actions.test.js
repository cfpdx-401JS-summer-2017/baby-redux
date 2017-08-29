import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from './App';
import Greeter from './components/Greeter';
import Editor from './components/Editor';
import { updateSalutation, updateName, resetForm } from './greeter.actions';

// action creators & reducers

describe('greeter', () => {

  describe('actions', () => {


  console.log(this);
  // const wrapper = shallow(<Counter count={3}/>);
  // expect(toJSON(wrapper)).toMatchSnapshot();

  it('updates salutation', () =>{
    const wrapper = mount
    (<Editor onChange={updateSalutation({salutation: 'hello', name: 'world'})} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    const wrapperAfterChange = mount
    (<Editor onChange={updateSalutation({salutation: 'goodbye', name: 'stranger'})} />);
    expect(toJSON(wrapperAfterChange)).toMatchSnapshot();
  });

  it('updates name', () => {
    const wrapper = mount
    (<Editor onChange={updateName({salutation: 'hello', name: 'sailor'})} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    const wrapperAfterChange = mount
    (<Editor onChange={updateName({salutation: 'hello', name: 'Larry'})} />);
    expect(toJSON(wrapperAfterChange)).toMatchSnapshot();

  });

  it('resets the form', () =>{

  });

  it('updates the state', () =>{

  });

})

})
