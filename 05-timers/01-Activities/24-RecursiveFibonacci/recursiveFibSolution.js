// 1 1 2 3 5 8 13 21

// Function to return the Fibonacci Sequence to a given number of places (n)
var fibonacci = function(n) {

    // Blank array to hold result
    var answer = [];

    // Loop to pass the desired place into the resursive function to detemine 
    // the Fibinacci Number at that position
    for(var i = 1; i < n+1; i++) {

        //push the calculated Fibonacci Number into the array
        answer.push(recursive(i));

    }
    document.getElementById("result").innerHTML = answer.join(" ");

    // Returns the answer
    return answer;
};

// Function which takes an integer as an argument (i) which is a place
// in the Fibonacci Sequence
var recursive = function(i) {

    // Triggered when calculating the 1st and 0th places,
    // simply returns 1 for the 1st position and
    // 0 for the 0th
    if(i < 2) {
        return i;
    }
    else {

        // Run resursive on the two places before the current one
        return recursive(i - 1) + recursive(i - 2);
    }
};