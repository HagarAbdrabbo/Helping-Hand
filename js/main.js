"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  console.log("Document ready!");

});


// drop down menue for the mobile virsion.
let burger = document.querySelector("#burger-menu");
let nav = document.querySelector("#mobile-nav");
let disapper = document.querySelector("#main");
let volunteer = document.querySelector("#volunteer");
let vsection = document.querySelector("#m-volunteer-section");
let donate = document.querySelector("#donate");
let dsection = document.querySelector("#m-donation-section");

burger.addEventListener("click", () => {
    nav.classList.add("visible");    
     console.log("Nav appered");
      });
   
disapper.addEventListener("click", () => {
    nav.classList.remove("visible");    
     console.log("Nav disappered");
      });
   
// Mobile donation section.



donate.addEventListener("click", () => {
    dsection.classList.add("visible");
    nav.classList.remove("visible");
    vsection.classList.remove("visible");  
     console.log("Nav appered");
      });
   
disapper.addEventListener("click", () => {
    dsection.classList.remove("visible");
     console.log("Nav disappered");
      });


// Mobile volunteer section.



volunteer.addEventListener("click", () => {
    vsection.classList.add("visible");
    nav.classList.remove("visible");
    dsection.classList.remove("visible");
     console.log("Nav appered");
      });
   
disapper.addEventListener("click", () => {
    vsection.classList.remove("visible");    
     console.log("Nav disappered");
      });
