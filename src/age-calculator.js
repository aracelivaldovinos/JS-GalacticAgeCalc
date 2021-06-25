export default function Calculator (age, lifeExpectancy, newAge, planet, newLifeExpectancy) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this.newAge = newAge
  this.planet = planet
  this.newLifeExpectancy = newLifeExpectancy
}

Calculator.prototype.ageCalculator = function () {
  this.newAge = []
  if (this.planet === "mercury") {
    this.newAge.push((Math.round(this.age * 0.24)))
    return this.newAge
  }else if (this.planet === "venus") {
    this.newAge.push((Math.round(this.age * 0.62)))
    return this.newAge
  }else if (this.planet === "mars") {
    this.newAge.push((Math.round(this.age * 1.88)))
    return this.newAge
  }else if (this.planet === "jupiter") {
    this.newAge.push((Math.round(this.age * 11.86)))
    return this.newAge
  }else if (this.planet === "saturn") {
    this.newAge.push((Math.round(this.age * 29.46)))
    return this.newAge
  }else if (this.planet === "uranus") {
    this.newAge.push((Math.round(this.age * 84.01)))
    return this.newAge
  }else if (this.planet === "neptune") {
    this.newAge.push((Math.round(this.age * 164.79)))
    return this.newAge
  }else if (this.planet === "pluto") {
    this.newAge.push((Math.round(this.age * 248.59)))
    return this.newAge
}else {
  this.newAge.push((Math.round(this.age * 1)))
  return this.newAge
}
}

Calculator.prototype.yearsLeft = function () {
  this.newAge = parseInt(this.newAge.toString())
  this.newLifeExpectancy = []
  if (this.planet === "mercury") {
    this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 0.24) - this.newAge)))
    return this.newLifeExpectancy 
  } else if (this.planet === "venus") {
    this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 0.62) - this.newAge)))
    return this.newLifeExpectancy 
}else if (this.planet === "mars") {
  this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 1.88) - this.newAge)))
    return this.newLifeExpectancy 
}else if (this.planet === "jupiter") {
  this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 11.88) - this.newAge)))
  return this.newLifeExpectancy 
}else if (this.planet === "saturn") {
  this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 29.46) - this.newAge)))
  return this.newLifeExpectancy 
}else if (this.planet === "uranus") {
  this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 84.01) - this.newAge)))
    return this.newLifeExpectancy 
}else if (this.planet === "neptune") {
  this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 164.79) - this.newAge)))
    return this.newLifeExpectancy 
}else if (this.planet === "pluto") {
  this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 248.59) - this.newAge)))
    return this.newLifeExpectancy 
}else {
  this.newLifeExpectancy.push(Math.round(((this.lifeExpectancy * 1) - this.newAge)))
  return this.newLifeExpectancy 
}
}
  

  
