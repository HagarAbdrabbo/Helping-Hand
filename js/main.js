"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  console.log("Document ready!");

});


// drop down menue for the mobile virsion.
let burger = document.querySelector("#burger-menu");
let nav = document.querySelector("#mobile-nav");
let disapper = document.querySelector("#main")

burger.addEventListener("click", () => {
    nav.classList.add("visible");    
     console.log("Nav appered");
      });
   
disapper.addEventListener("click", () => {
    nav.classList.remove("visible");    
     console.log("Nav disappered");
      });
   
