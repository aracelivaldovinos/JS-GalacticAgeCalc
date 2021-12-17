import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './age-calculator.js';




$(document).ready(function(){
  $("button").on("click", function(event){
    event.preventDefault();
    $("#planetsDiv").show();
   
    let age = $("input#age").val();
    this.age= parseInt(age);
    this.name = $("input#name").val();
    this.planet = $("select#planet").val();
    let planet = this.planet[0].toUpperCase() + this.planet.substring(1);

    let person = new Calculator(this.age, 80, this.planet);
    let years = person.ageCalculator();
    let yearsLeft = person.yearsLeft();
    let yearsOver = person.yearsOver();
    
    const images = {
      mercury: "<img src='https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/AW_Mercury_ladprw.jpg'/>",
      venus: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDI2DNSQ6lVsfVX889mTSLNCsQg6kAs7B7majQhDm0ET9GFMZUHHQ4xnJL0uNmB7bKyY&usqp=CAU'/>",
      mars: "<img src='https://livingmoonastrology.files.wordpress.com/2011/03/mars-no-background.jpg?w=285'/>",
      jupiter: "<img src='https://www.pngitem.com/pimgs/m/107-1076455_jupiter-planet-freetoedit-jupiter-transparent-hd-png-download.png'/>",
      saturn: "<img src='https://www.clipartkey.com/mpngs/m/58-581694_image-of-saturn-compared-to-earth-saturn-planet.png'/>",
      neptune: "<img src='https://us.123rf.com/450wm/2dmolier/2dmolier1803/2dmolier180300729/97191350-neptune-planet-on-white-background-3d-illustration.jpg?ver=6'/>",
      uranus: "<img src='https://c1.alamy.com/thumbs/2bxxmw1/planet-uranus-isolated-on-white-background-realistic-vector-2bxxmw1.jpg'/>",
      pluto: "<img src='https://media.istockphoto.com/photos/planet-pluto-in-space-picture-id1252446498?k=20&m=1252446498&s=170667a&w=0&h=Fvz2KUPI96gVoF9lxgDz4INBxQw2YtkUW_cEBR9fiA8='/>",
    };

    $(".userName").append(this.name);
    $(".userAge").append(this.age);
    $(".planetName").append(planet);
    $(".years").append(years);

    if (this.age > 80){
      $(".yearsOverLine").append(`You are <b><span class='yearsOver'></span></b> years over the life expectancy on ${planet}.`);
      $(".yearsOver").append(yearsOver);
      // $(".planetName").append(planet);
      $(".yearsOverLine").show();
      $(".yearsLeftLine").hide();
    }
    else if (this.age === 80){
      $(".yearsOverLine").empty();
      $(".yearsOverLine").append("<p>You are the average life expectancy.</p>");
      $(".yearsLeftLine").hide();
      $(".yearsOverLine").show();
    } 
    else {
      $(".yearsLeft").append(yearsLeft);
      $(".yearsLeftLine").show();
      $(".yearsOverLine").hide();
    }

    if (this.planet in images){
      $(".image").append(images[this.planet]);
    }

    $(".form-group").click(function () {
      $("#planetsDiv").hide();
      $(".userName").empty();
      $(".userAge").empty();
      $(".planetName").empty();
      $(".image").empty();
      $(".years").empty();
      $(".yearsOver").empty();
      $(".yearsOverLine").empty();
      $(".yearsLeft").empty();
    });  
  });
});

