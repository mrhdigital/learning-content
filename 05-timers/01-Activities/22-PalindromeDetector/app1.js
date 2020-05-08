var sentence1 = "Otto bought a racecar he cannot afford.";
var sentence2 = "Otto lost the deed to his house.";
var sentence3 = "Otto needs Xanax.";


function stringToArrayOfWords(s) {
    var words = s.split(' ');
    console.log(words);
        // Replace the contents of the "result" div with the merged showOnpage array.
        document.getElementById("result1").innerHTML = words.join(" ");

}