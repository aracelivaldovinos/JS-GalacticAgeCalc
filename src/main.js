import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './age-calculator.js';




$(document).ready(function(){
  $("button").on("click", function(event){
    event.preventDefault();
    $("#planetsDiv").show();
    // alert("it works")
    let age = $("input#age").val();
    this.age= parseInt(age);
    this.name = $("input#name").val();
    this.planet = $("select#planet").val();
    let planet = this.planet[0].toUpperCase() + this.planet.substring(1);
    // this.planet = planet.toUpperCase();

    let person = new Calculator(this.age, 80, this.planet);
    let years = person.ageCalculator();
    let yearsLeft = person.yearsLeft();
    let yearsOver = person.yearsOver();
  

    console.log(this.age);
    console.log(this.name);
    console.log(this.planet);

    $(".userName").append(this.name);
    $(".userAge").append(this.age);
    $(".planetName").append(planet);
    $(".years").append(years);


    if (this.age > 80){
      $(".yearsOver").append(yearsOver);
      $(".yearsOverLine").show();
      $(".yearsLeftLine").hide();
    }
    else if (this.age === 80){
      $(".yearsOverLine").empty();
      $(".yearsOverLine").append("<p>You are the average life expectancy.</p>");
      $(".yearsOverLine").show();
    } 
    else {
      $(".yearsLeft").append(yearsLeft);
      $(".yearsLeftLine").show();
      $(".yearsOverLine").hide();
    }

    $(".form-group").click(function () {
      $("#planetsDiv").hide();
      $(".userName").empty();
      $(".userAge").empty();
      $(".planetName").empty();
      $(".years").empty(years);
      $(".yearsOver").empty(yearsOver);
      $(".yearsLeft").empty(yearsLeft);
    });
   
  });
});

