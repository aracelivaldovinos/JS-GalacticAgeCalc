import Calculator from './../src/age-calculator.js';

describe('Calculator', () => {

  test('should correctly create a calculator object with three properties', () => {
    const calculator = new Calculator (27,46, 0, "jupiter", [0] );
    expect(calculator.age).toEqual(27);
    expect(calculator.lifeExpectancy).toEqual(46);
    expect(calculator.newAge).toEqual(0);
    expect(calculator.planet).toEqual("jupiter");
    expect(calculator.newLifeExpectancy).toEqual([0]);
  });
  test('should calculate age in mercury years', () => {
    const mercuryAge = new Calculator (27,46, 0, "mercury");
    expect(mercuryAge.ageCalculator ()).toEqual([6]);
  });
  test('should calculate age in venus years', () => {
    const venusAge = new Calculator (27,46, 0, "venus");
    expect(venusAge.ageCalculator ()).toEqual([17]);
  });
  test('should calculate age in mars years', () => {
    const marsAge = new Calculator (27,46, 0, "mars");
    expect(marsAge.ageCalculator ()).toEqual([51]);
  });
  test('should calculate age in jupiter years', () => {
    const jupiterAge = new Calculator (27,46, 0, "jupiter");
    expect(jupiterAge.ageCalculator ()).toEqual([320]);
  });
  test('should calculate age in saturn years', () => {
    const saturnAge = new Calculator (27,46, 0, "saturn");
    expect(saturnAge.ageCalculator ()).toEqual([795]);
  });
  test('should calculate age in uranus years', () => {
    const uranusAge = new Calculator (27,46, 0, "uranus");
    expect(uranusAge.ageCalculator ()).toEqual([2268]);
  });
  test('should calculate age in neptune years', () => {
    const neptuneAge = new Calculator (27,46, 0, "neptune");
    expect(neptuneAge.ageCalculator ()).toEqual([4449]);
  });
  test('should calculate age in pluto years', () => {
    const plutoAge = new Calculator (27,46, 0, "pluto");
    expect(plutoAge.ageCalculator ()).toEqual([6712]);
  });
  test('should calculate age in earth years', () => {
    const earthAge = new Calculator (27,46, 0, "earth");
    expect(earthAge.ageCalculator ()).toEqual([27]);
  });
  test('should calculate years left on mercury', () => {
    const yearsLeft = new Calculator (27,73, [6], "mercury");
    expect(yearsLeft.yearsLeft ()).toEqual([12]);
  });
  test('should calculate years left on venus', () => {
    const yearsLeft = new Calculator (27,73, [17], "venus");
    expect(yearsLeft.yearsLeft ()).toEqual([28]);
  });
  test('should calculate years left on mars', () => {
    const yearsLeft = new Calculator (27,73, [51], "mars");
    expect(yearsLeft.yearsLeft ()).toEqual([86]);
  });
  test('should calculate years left on jupiter', () => {
    const yearsLeft = new Calculator (27,73, [320], "jupiter");
    expect(yearsLeft.yearsLeft ()).toEqual([547]);
  });
  test('should calculate years left on saturn', () => {
    const yearsLeft = new Calculator (27,73, [795], "saturn");
    expect(yearsLeft.yearsLeft ()).toEqual([1356]);
  });
  test('should calculate years left on uranus', () => {
    const yearsLeft = new Calculator (27,73, [2268], "uranus");
    expect(yearsLeft.yearsLeft ()).toEqual([3865]);
  });
  test('should calculate years left on neptune', () => {
    const yearsLeft = new Calculator (27,73, [4449], "neptune");
    expect(yearsLeft.yearsLeft ()).toEqual([7581]);
  });
  test('should calculate years left on pluto', () => {
    const yearsLeft = new Calculator (27,73, [6712], "pluto");
    expect(yearsLeft.yearsLeft ()).toEqual([11435]);
  });
  test('should calculate years left on pluto', () => {
    const yearsLeft = new Calculator (27,73, [27], "earth");
    expect(yearsLeft.yearsLeft ()).toEqual([46]);
  });
  
  
});