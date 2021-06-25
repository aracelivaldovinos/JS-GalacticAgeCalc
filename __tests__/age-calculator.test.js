import Calculator from './../src/age-calculator.js';

describe('Calculator', () => {

  test('should correctly create a calculator object with three properties', () => {
    const calculator = new Calculator (27,46, 0);
    expect(calculator.age).toEqual(27);
    expect(calculator.yearsLeft).toEqual(46);
    expect(calculator.yearsOver).toEqual(0);
  });
  test('should calculate age in mercury years', () => {
    const mercuryAge = new Calculator (27,46, 0);
    expect(mercuryAge.ageCalculator ()).toEqual(27);
  });
});