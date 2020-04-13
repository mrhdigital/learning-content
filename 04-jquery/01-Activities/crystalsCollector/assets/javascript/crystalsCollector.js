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

// Score (current and target)
var targetScore = 0;
var currentScore = 0;

// Wins and losses
var winCount = 0;
var lossCount = 0;



// FUNCTIONS
//*****************************************************************************************/
// function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}   

// Assign random number to varialbe targetNumber
targetScore = getRandom(19,120);
 console.log(targetScore);

 // created for loop to assign the random values to each object(colored crytal) in the array
 for(var i = 0; i < crystal.length; i++) {
  crystal[i].value = getRandom(1,12);
  var crystalDiv = $("<div class='crystals-button' data-name='" + crystal[i].value + "'>");
  var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystal[i].imageUrl);
  crystalDiv.append(crystalImg);
  $("#crystal-area").append(crystalDiv);
}

    // Building our win/loss display and appending it to the page.
    var wSpan = $("<span>").text(winCount);
    var lSpan = $("<span>").text(lossCount);
   

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $("#win-area").append(pWins);
    $("#win-area").append(pLosses);
  

  // Testing Console
  console.log("---------------------------------------");
  console.log("Target Score:" + targetScore);
  console.log("Blue: " + crystal[0].value + " | Green: " +crystal[1].value + " |Red: " + crystal[2].value+ " | Yellow: " + crystal[3].value);
  console.log("---------------------------------------");
// Here we create an on.click event for the crystals.
// $(".crystals-button").on("click",function(crystal) {
//   //alert("clicked");
//   currentScore += crystal.value;
//   $("#score-area").html(currentScore);
//   console.log(currentScore);
//})
$(".crystals-button").click(function() {
currentScore += parseInt(this.dataset.name);
console.log(currentScore);
   $("#score-area").html(currentScore);

   if(currentScore === targetScore) {
    alert("Congratulations! You Won!");
     winCount++;

   }
   else if (currentScore > targetScore) {
     alert("Sorry, You Lost!");
     lossCount++;
   }

  //addValues(crystal[0]);
});


 // Display the targetNumber in the div with ID = random-area
 $("#random-area").html(targetScore);
 




});