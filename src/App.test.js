import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//Bill Form
it('renders the Bill component', ()=>{
  const component = shallow(<App />);
  const Bill = component.find('Bill');
  expect(Bill.length).toBe(1);
});

it('should update bill in the App state when numbers are typed into the field', () => {
  const testBill = 13.56;

  const component = mount(<App />);
  const input = component.find('#bill');
  input.simulate('change', {
    target: {
      value: testBill
    }
  });
  input.simulate('keydown', {
    keyCode: 13
  });

  expect(component.state().bill).toEqual(testBill);
});

//Tip Form
it('renders the TipForm component', ()=>{
  const component = shallow(<App />);
  const Forms = component.find('TipForm');
  expect(Forms.length).toBe(1);
});

it('should increment the tip in App state when the increment tip button is clicked', () =>{
  const component = mount(<App />);
  const incrementButton = component.find('#incrementTip');
  incrementButton.simulate('click');
  incrementButton.simulate('click');
  expect(component.state().tip).toEqual(12);
});

it('should decrement the tip in App state when the decrement tip button is clicked', () =>{
  const component = mount(<App />);
  const decrementButton = component.find('#decrementTip');
  decrementButton.simulate('click');
  decrementButton.simulate('click');
  expect(component.state().tip).toEqual(8);
});

it('should update tip in App state when values are entered into the input manually', ()=>{
  const testTip = 12.35;
  const component = mount(<App />);
  const input = component.find('#tip');
//manual entry
  input.simulate('change', {
    target: {
      value: testTip
    }
  });
  input.simulate('keydown', {
    keyCode: 13
  });
  expect(component.state().tip).toEqual(testTip);
});

//Split Form
it('renders the SplitForm component', ()=>{
  const component = shallow(<App />);
  const Forms = component.find('SplitForm');
  expect(Forms.length).toBe(1);
});

it('should increment the tip in App state when the increment tip button is clicked', () =>{
  const component = mount(<App />);
  const incrementButton = component.find('#incrementSplit');
  incrementButton.simulate('click');
  incrementButton.simulate('click');
  expect(component.state().split).toEqual(4);
});

it('should decrement the tip in App state when the decrement tip button is clicked', () =>{
  const component = mount(<App />);
  const decrementButton = component.find('#decrementSplit');
  decrementButton.simulate('click');
  expect(component.state().split).toEqual(1);
});

it('should update tip in App state when values are entered into the split input manually', ()=>{
  const testSplit = 5;
  const component = mount(<App />);
  const input = component.find('#split');
//manual entry
  input.simulate('change', {
    target: {
      value: testSplit
    }
  });
  input.simulate('keydown', {
    keyCode: 13
  });
  expect(component.state().split).toEqual(testSplit);
});
//Payment components

it('should render the Payment component', ()=>{
  const component = shallow(<App />);
  const Forms = component.find('Payment');
  expect(Forms.length).toBe(1);
});

describe('outputResults()', ()=>{
  it('should output an object with the tip amount, the tip split, and the total payment', ()=>{
    const bill = 10;
    const split = 1;
    const tip = 10;
    const component = mount(<App />);
    // console.log(component.instance().outputResults(100, 2, 10))
    expect(component.instance().outputResults(bill, split, tip)).toEqual({tip: '$1.00', splitTip:"$1.00", payment: '$11.00'});
  });
});
