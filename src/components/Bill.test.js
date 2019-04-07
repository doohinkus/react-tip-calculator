import React, { Component } from 'react';
import Bill from './Bill';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Bill', () => {


  it('should show label field with text of Bill Amount:', ()=>{
    const component = shallow(<Bill />);
    const label = component.find('label');
    expect(label.length).toBe(1);
    expect(label.text()).toEqual('Bill Amount:')
  });
  it('should show a text input field', ()=>{
    const component = shallow(<Bill />);
    const input = component.find('input');
    expect(input.length).toBe(1);
  });

});
