var FizzBuzz = function() {
 
    // Loop 100 times, starting from the number 1
    for(var i = 1; i <= 100; i++) {

        // if divisible by 3 and 5, print "FizzBuzz"
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log("FizzBuzz");

        // if divisible by 3,
        } else if(i % 3 === 0) {

            // print "Fizz"
            console.log("Fizz");

           // If divisible by 5, 
        } else if(i % 5 === 0) {

            // Print "Buzz"
            console.log("Buzz");
        }
        
        // If not divisible either 3 or 5,
        else{

            // just print the number.
        console.log(i);
        }
    }
}