//alert("Linked");

// Reverse in Place w/Palindrome Detector


// Instructions
// ============

// A palindrome is a sentence that reads the same backwards and forwards:
// "Was it a car or a cat I saw?"

// Reverse each word in a sentence
// and display it on the screen in the same order.

// For example, the sentence "This is an example"
// would become `siht si na elpmaxe.`

// If the word is a palindrome, have it display in red.


// Notes:
// ======

// Remove periods.
// Add the result to the page in the div with the id "Result".
// Here are some test phrases to put in your JavaScript:
// "Otto bought a racecar he cannot afford."
// "Otto lost the deed to his house."
// "Otto needs Xanax."


// Bonus:
// ======

// Remove all "special characters" (commas, periods, etc).
// Do not use the reverse() method.

var sentence1 = "Otto bought a racecar he cannot afford.";
var sentence2 = "Otto lost the deed to his house.";
var sentence3 = "Otto needs Xanax.";

// Example for special characters bonus.
var sentence4 = "On the way to get Xanax, Otto found a kayak. He couldn't believe his luck!";

function palindromeDetector (s) {
    // To hold the array of reversed words.

    var reversedArray = [];

    // To hold split the sentence into an array of words.
    var words = s.split(" ");

    // To hold words to be shown on page.
    var showOnPage = [];

    // Loops over each word
    for(var i = 0; i < words.length; i++) {

        words[i] = words[i].replace(/[^a-zA-Z]+/g, "");

        var letters = words[i].split("");
 

        var reversedAndJoined  = "";

        // Loops backwards over the letter array.
        for(var l = letters.length - 1; l >= 0; l--) {
            // Add the letters to the string above.

            reversedAndJoined += letters[l];
        
        }
           // Adds individual reversed word to the array of reversed words.
      reversedArray.push(reversedAndJoined);

    }
    for(var j = 0; j < reversedArray.length; j++) {
        // Check to see if a word is longer than one letter and checks the reversed word against
        // the non-reversed word.
        // (Using toLowerCase so it will ignore any capital letters).
        if(reversedArray[j].length > 1 && reversedArray[j].toLocaleLowerCase() === words[j].toLocaleLowerCase()) {
            // if its palindrom, it wraps the word in a span to make it red,
            // then pushed it to the showPage array.
            showOnPage.push("<span style= 'color:red'>" + reversedArray[j] + "</span>");
        }
        else {
            // Not a palindrom, just push the plain word.
            showOnPage.push(reversedArray[j]);
        }

    }
    // Replace the contents of the "result1" div with the merged reversedArray array.

    document.getElementById("result1").innerHTML = reversedArray.join(" ");

    // Replace the contents of the "result" div with the merged showOnpage array.
    document.getElementById("result").innerHTML = showOnPage.join(" ");
}

