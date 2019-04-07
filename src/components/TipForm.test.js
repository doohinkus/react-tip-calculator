import React, { Component } from 'react';
import TipForm from './TipForm';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('TipForm', () => {
  //setup
  const testProps = {
    title: 'Tip Amount',
    function: jest.fn(() => null),
    updateBill: jest.fn(() => null),
    incrementTip: jest.fn(() => null),
    decrementTip: jest.fn(() => null)
  }
  const component = shallow(<TipForm />);
  const componentProps = shallow(<TipForm
    title={testProps.title}
    updateBill={testProps.updateBill}
    incrementTip={testProps.incrementTip}
    decrementTip={testProps.decrementTip}
    onChange={testProps.function} />);
 //end setup

  it('should render a label element', ()=>{
    const label = component.find('label');
    expect(label.length).toBe(1);
  });

  it('should render the increment button', ()=>{
    const button = component.find('#incrementTip');
    expect(button.length).toBe(1);
  });

  it('should render the decrement button', ()=>{
    const button = component.find('#decrementTip');
    expect(button.length).toBe(1);
  });

  it('should receive props correctly', ()=>{
    const component = mount(<TipForm />);
    expect(componentProps.instance().props.title).toBe(testProps.title);
    expect(componentProps.instance().props.onChange).toBe(testProps.function);
    expect(componentProps.instance().props.updateTip).toBe(testProps.updateTip);
    expect(componentProps.instance().props.decrementTip).toBe(testProps.decrementTip);
    expect(componentProps.instance().props.incrementTip).toBe(testProps.incrementTip);

    // console.log(component.debug())
  });

});
