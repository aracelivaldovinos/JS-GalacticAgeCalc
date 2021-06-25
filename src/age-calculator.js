export default function Calculator (age, yearsLeft, yearsOver, planet) {
  this.age = age;
  this.yearsLeft = yearsLeft;
  this.yearsOver = yearsOver
  this.planet = planet
}

Calculator.prototype.ageCalculator = function () {
  if (this.planet === "mercury") {
    return (Math.round(this.age * 0.24))
  }
  
}