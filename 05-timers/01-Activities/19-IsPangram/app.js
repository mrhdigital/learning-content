//alert("Linked");

var test1 = "The quick brown fox jumps over the lazy dog.";

var isPangram = function(string) {

    if(string.length < 26) {
        console.log("False: It is NOT a pangram");
    }
 var letterHolder = [];

 var letters = string.toLowerCase().replace(/[^a-z]+/g, "").split("");
 console.log(letters);

 for (var i = 0; i < string.length; i++) {
     if (string[i].indexOf(letterHolder) === -1) {
         console.log("push to letterHolder")
     }
 


    else {
    console.log("I will give answere here");
    }
}
}