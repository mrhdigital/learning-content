//console.log("link");
// 1 1 2 3 5 8 
var fibonacci = function(i) {
    var result = [];
    for (var j = 1; j < i +1; j++) {
        result.push(recursive(j));
    }

    document.getElementById("result").innerHTML = result.join(" ");

    return result;

}

// Returns the fibonacci sequence integer
var recursive = function(n) {
    if(n < 2){
        return n;
    }
    else {
        return recursive(n - 1) + recursive(n - 2);
    }
};