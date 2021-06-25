export default function Calculator (age, yearsLeft, yearsOver, planet) {
  this.age = age;
  this.yearsLeft = yearsLeft;
  this.yearsOver = yearsOver
  this.planet = planet
}

Calculator.prototype.ageCalculator = function () {
  if (this.planet === "mercury") {
    return (Math.round(this.age * 0.24))
  }else if (this.planet === "venus") {
    return (Math.round(this.age * 0.62))
  }else if (this.planet === "mars") {
    return (Math.round(this.age * 1.88))
  }else if (this.planet === "jupiter") {
    return (Math.round(this.age * 11.86))
  }
  
}