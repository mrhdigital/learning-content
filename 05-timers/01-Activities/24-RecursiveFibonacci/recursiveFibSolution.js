// 1 1 2 3 5 8 13 21
var fibonacci = function(n) {
    var answer = [];
}
var recursive = function(i) {

    if(i < 2) {
        return i;
    }
    else {
        return recursive(i - 1) + recursive(i - 2);
    }
};