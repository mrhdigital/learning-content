// Prime Checker
//* Write a function that checks to see if a number is a prime number or not. Have it return `true` if it is, or `false` if it isn't.

//* A Prime number is a number greater than one that can only be divided by one and itself.

// Declare our primeCheck function
function primeCheck(number) {
if(number <= 0) {
    //var isPrime = "";
   var isPrime = (`${number} is not a prime number`);
    console.log(isPrime);
    document.getElementById("result").innerHTML = isPrime;
}
else 
for( var i = 2; i < number; i++) {
    if(number % i === 0) {
        var isPrime = (`${number} is not a prime number`);
        console.log(isPrime);
        document.getElementById("result").innerHTML = isPrime;
    }
}
}

