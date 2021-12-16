class Calculator {
  constructor(age, lifeExpectancy, planet){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planet = planet;
    this.planets = {
      mercury: 0.24,
      venus: 0.62,
      mars: 1.88,
      earth: 1.00,
      jupiter: 11.86,
      saturn: 29.46,
      uranus: 84.01,
      neptune: 164.79,
      pluto: 248.59
    };
  }
  
  ageCalculator() {
    if (this.planet in this.planets){
      return(Math.round(this.age * (this.planets[this.planet])));
    }
  }

  yearsLeft() {
    if (this.planet in this.planets){
      return(
        Math.round(
          (this.lifeExpectancy * (this.planets[this.planet]))-(this.age * (this.planets[this.planet])))
      );
    }
  }

  yearsOver() {
    if (this.planet in this.planets && 
      ((this.lifeExpectancy * (this.planets[this.planet])) <= (this.age * (this.planets[this.planet])))){
      return(
        ((this.age * (this.planets[this.planet]))-(this.lifeExpectancy * (this.planets[this.planet]))).toFixed(2)
      );
    }
    else{
      return("You are not over the life expectancy in this planet");
    }
  }
}

export default Calculator;


  
