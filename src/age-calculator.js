export default function Calculator (age, yearsLeft, yearsOver) {
  this.age = age;
  this.yearsLeft = yearsLeft;
  this.yearsOver = yearsOver
}

Calculator.prototype.ageCalculator = function () {
  let mercury = Math.round(this.age * 0.24)
  return mercury 
}