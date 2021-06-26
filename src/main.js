
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './age-calculator.js';


$(document).ready(function(){
  $("button#btn").on("click", function(event){
    event.preventDefault()
    let age = $("input#age").val()
    this.name = $("input#name").val()
    this.age= parseInt(age)
    console.log(this.age)
    console.log(this.name)
  })


})

