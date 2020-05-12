//console.log("link");
// 1 1 2 3 5 8 
// var fibonacci = function(i) {
//     var result = [];
//     for (var j = 1; j < i +1; j++) {
//         result.push(recursive(j));
//     }

//     document.getElementById("result").innerHTML = result.join(" ");

//     return result;

// }

// // Returns the fibonacci sequence integer
// var recursive = function(n) {
//     if(n < 2){
//         return n;
//     }
//     else {
//         return recursive(n - 1) + recursive(n - 2);
//     }
// };

//console.log("linked")

function fibonacci(number) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
};