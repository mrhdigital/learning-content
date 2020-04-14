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
var GameStarted = false;

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

 var startGame = function() {
  var GameStarted = true;

 // created for loop to assign the random values to each object(colored crytal) in the array
 for(var i = 0; i < crystal.length; i++) {
  crystal[i].value = getRandom(1,12);
  var crystalDiv = $("<div class='crystals-button' data-name='" + crystal[i].value + "'>");
  var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystal[i].imageUrl);
  crystalDiv.append(crystalImg);
  $("#crystal-area").append(crystalDiv);
}

  // Testing Console
  console.log("---------------------------------------");
  console.log("Target Score:" + targetScore);
  console.log("Blue: " + crystal[0].value + " | Green: " +crystal[1].value + " |Red: " + crystal[2].value+ " | Yellow: " + crystal[3].value);
  console.log("---------------------------------------");

 }
    // Building our win/loss display and appending it to the page.
    var updateDisplay = function() {
    var wSpan = $("<span id = 'winId'>").text(winCount);
    var lSpan = $("<span id = 'lossId'>").text(lossCount);
   

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $("#win-area").append(pWins);
    $("#win-area").append(pLosses);
  
    }
// Here we create an on.click event for the crystals.
// $(".crystals-button").on("click",function(crystal) {
//   //alert("clicked");
//   currentScore += crystal.value;
//   $("#score-area").html(currentScore);
//   console.log(currentScore);
//})

if(!GameStarted){
  startGame();
  updateDisplay();

}

$(".crystals-button").click(function() {
  //alert("Hello");
currentScore += parseInt(this.dataset.name);
console.log("currentScore");
   $("#score-area").html(currentScore);

   if(currentScore === targetScore) {
     winCount++;
     //updateDisplay();
     $("#score-area").html(currentScore);

     alert("Congratulations! You Won!");
     $("#score-area").empty();
     $("#crystal-area").empty();
     $("#win-area").empty();
     $("#winId").html(winCount);


     currentScore = 0;
     //startGame();
     
     //GameStarted = true;


   }
   else if (currentScore > targetScore) {
     lossCount++;
     //updateDisplay();

     $("#score-area").html(currentScore);

     alert("Sorry, You Lost!");
     //$("#score-area").empty();
     $("#crystal-area").empty();
     $("#lossId").html(lossCount);


     currentScore = 0;
     startGame();
     
    // GameStarted = true;



   }


  //addValues(crystal[0]);
});


 // Display the targetNumber in the div with ID = random-area
 $("#random-area").html(targetScore);
 




});