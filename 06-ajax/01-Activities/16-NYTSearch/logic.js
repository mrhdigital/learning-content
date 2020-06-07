alert("HI");

// SETUP VARIABLES
// =========================================

var authKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";

// Search Parameters
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// URL Base
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;


// FUNCTIONS
// =========================================


function runQuery(numArticles, queryURL) {

    // AJAX Function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(NYTData) {
  
      // Logging to Console
      console.log("------------------");
      console.log(queryURL);
      console.log("------------------");
      console.log(numArticles);
      console.log(NYTData);
  
    });
}

// MAIN PROCESSES
// =========================================
$("#search-btn").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks).
  
    // Send the AJAX Call the newly assembled URL
    runQuery(numResults, newURL);
  
  });
  

// 1. Retrieve user inputs and convert to variables
// 2. Use those variable to run an AJAX call to the New York Times.
// 3. Break down the NYT Object into useable fields
// 4. Dynamically generate html content

// 5. Dealing with "edge cases" -- bugs or situations that are not intuitive.
