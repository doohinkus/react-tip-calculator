import {functions} from './BusinessLogic';
//Business Logic
describe('Business Logic', () => {
  describe('formatNumbers()', () => {
    it('should fix numbers to two decimal places with dollar sign in front', ()=>{
      expect(functions.formatTwoDecimalPlaces(10)).toBe('$10.00');
      expect(functions.formatTwoDecimalPlaces(10)).not.toBe('$10');
    });
  });
  describe('tipAmount()', ()=>{
    it('should calculate the amount of the tip based on the bill and tip %', ()=>{
      const bill = 10.00;
      const tip = 30;
      expect(functions.calculateTip(bill, tip)).toEqual(3);
      expect(functions.calculateTip(bill, tip)).not.toEqual(1);
    });
  });
  describe('totalBill()', ()=>{
    it('should calculate the total bill with tip', ()=>{
      const bill = 10.00;
      const tip = 3;
      expect(functions.totalBill(bill,tip)).toEqual(13);
      expect(functions.totalBill(bill,tip)).not.toEqual(12);
    });
  });
  describe('divideBill()', ()=>{
    it('should divide the bill by the split', ()=>{
      const bill = 12.00;
      const split = 3;
      expect(functions.splitBill(bill, split)).toEqual(4);
      expect(functions.splitBill(bill, split)).not.toEqual(3);
    });
  });
  describe('splitTip', ()=>{
    it('should divide the tip', ()=>{
      const tip = 10;
      const split = 2;
      expect(functions.splitTip(tip, split)).toEqual(5);
      expect(functions.splitTip(tip, split)).not.toEqual(3);
    });
  })

});
