import React, { Component } from 'react';
import Payment from './Payment';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Payment', () => {
  const testProps = {
    tip: 10,
    bill: 100,
    label: 'happy',
    emoji: 'smilely'
  }
  it('should render 4 spans', ()=>{
    const component = shallow(<Payment />);
    const spans = component.find('span')
    expect(spans.length).toBe(4);
    expect(spans.length).not.toBe(2);
  });
  it('should render props correctly', ()=>{
      const component = shallow(<Payment
        tip={testProps.tip}
        bill={testProps.bill}
        label={testProps.label}
        emoji={testProps.emoji}
      />);
      expect(component.instance().props.tip).toBe(testProps.tip);
      expect(component.instance().props.bill).toBe(testProps.bill);
      expect(component.instance().props.label).toBe(testProps.label);
      expect(component.instance().props.emoji).toBe(testProps.emoji);
  });

});
