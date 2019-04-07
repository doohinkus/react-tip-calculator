import React, { Component } from 'react';
import SplitForm from './SplitForm';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('SplitForm', () => {
  //setup
  const testProps = {
    title: 'Split Amount',
    function: jest.fn(() => 1)
  }
  const component = shallow(<SplitForm />);
  const componentProps = shallow(<SplitForm
    title={testProps.title}
    updateBill={testProps.updateBill}
    incrementSplit={testProps.incrementSplit}
    decrementSplit={testProps.decrementSplit}
    onChange={testProps.function} />);
 //end setup

  it('should render a label element', ()=>{
    const label = component.find('label');
    expect(label.length).toBe(1);
  });

  it('should render the increment button', ()=>{
    const button = component.find('#incrementSplit');
    expect(button.length).toBe(1);
  });

  it('should render the decrement button', ()=>{
    const button = component.find('#decrementSplit');
    expect(button.length).toBe(1);
  });

  it('should receive props correctly', ()=>{

    expect(componentProps.instance().props.title).toBe(testProps.title);
    expect(componentProps.instance().props.onChange).toBe(testProps.function);
    expect(componentProps.instance().props.incrementSplit).toBe(testProps.incrementSplit);
    expect(componentProps.instance().props.decrementSplit).toBe(testProps.decrementSplit);
    expect(componentProps.instance().props.updateBill).toBe(testProps.updateBill);

    // console.log(component.debug())
  });

});
