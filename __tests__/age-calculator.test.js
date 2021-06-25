import Calculator from './../src/age-calculator.js';

describe('Calculator', () => {

  test('should correctly create a calculator object with three properties', () => {
    const calculator = new Calculator (27,46, 0, "jupiter");
    expect(calculator.age).toEqual(27);
    expect(calculator.yearsLeft).toEqual(46);
    expect(calculator.yearsOver).toEqual(0);
    expect(calculator.planet).toEqual("jupiter");
  });
  test('should calculate age in mercury years', () => {
    const mercuryAge = new Calculator (27,46, 0, "mercury");
    expect(mercuryAge.ageCalculator ()).toEqual(6);
  });
  test('should calculate age in venus years', () => {
    const mercuryAge = new Calculator (27,46, 0, "venus");
    expect(mercuryAge.ageCalculator ()).toEqual(17);
  });
  test('should calculate age in mars years', () => {
    const mercuryAge = new Calculator (27,46, 0, "mars");
    expect(mercuryAge.ageCalculator ()).toEqual(51);
  });
  test('should calculate age in jupiter years', () => {
    const mercuryAge = new Calculator (27,46, 0, "jupiter");
    expect(mercuryAge.ageCalculator ()).toEqual(320);
  });

});