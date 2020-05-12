// Test strings t run in our calculator
var test1 = "Add 2 and 4";
var test2 = "Subtract 3 from 10";
var test3 = "Multiply 8 and 2";
var test4 = "Divide 30 by 3";

// Declare our string calculator function
function stringCalculator(string) {

    // Split input into calculator words
    // Using toLoweCase to ensure it will match that
    // we're checking in the swith statement.

    var splitString = string.toLowerCase().split(" ");

    // Check to see if the array is the correct legth,
    // and to see if the 1st and 3rd elements in the array have numeric values.
    if(splitString.length !== 4  || isNaN(parseInt(splitString[1])) || isNaN(parseInt(splitString[3]))) {
    
        // If not, tell the user that we received an invalid request.
        console.log("Invalid Request Format. Try Again");

    }
}

