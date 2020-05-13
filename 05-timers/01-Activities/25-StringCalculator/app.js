// Test strings t run in our calculator
var test1 = "Add 2 and fout";
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
    else {

        // Check the first element in the string for a matching calculator operation
        switch (splitString[0]) {

            // if the string is 'multiply'...
            case "multiply":

            // multiply the numbers.
            return splitString[1] * splitString[3];

            // If the string is "divide"...
            case "divide":

            // divide the first number with the second.
            return splitString[1] / splitString[3];

            // if the string is "subtract"...
            case "subtract":

            // subtract the first number from the third.
            return splitString[1] - splitString[3];


            // If the string is "add"...
            case "add":

            // add the first and second number.
            return parseInt(splitString[1] + parseInt(splitString[3]));

            



        }
    }
}


