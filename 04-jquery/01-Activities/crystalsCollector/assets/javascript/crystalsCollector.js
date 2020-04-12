// Execute this code when the DOM has fully loaded
$(document).ready(function() {
//alert("Hello");

// Created the array of object "crystal"
var crystal = [
    
  {
      name: "blue",
      value: 0,
      imageUrl: "assets/images/blue.png"
  },
  
  {
      name: "green",
      value: 0,
      imageUrl: "assets/images/green.png"
  },
  
  {
      name: "red",
      value: 0,
      imageUrl: "assets/images/red.png"
  },
  
  {
      name:"yellow",
      value: 0,
      imageUrl: "assets/images/yellow.png"
  }
];

var targetNumber = 0;



// FUNCTIONS
//*****************************************************************************************/
// function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}   

// Assign random number to varialbe targetNumber
targetNumber = getRandom(19,120);
 console.log(targetNumber);

 // created for loop to assign the random values to each object(colored crytal) in the array
 for(var i = 0; i < crystal.length; i++) {
  crystal[i].value = getRandom(1,12);
  var crystalDiv = $("<div class='crystals-button' data-name='" + crystal[i].name + "'>");
  var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystal[i].imageUrl);
  crystalDiv.append(crystalImg);
  $("#crystal-area").append(crystalDiv);
}


 // Display the targetNumber in the div with ID = random-area
 $("#random-area").html(targetNumber);





});