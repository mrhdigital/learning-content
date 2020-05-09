var sentence1 = "Otto bought a racecar he cannot afford.";
var sentence2 = "Otto lost the deed to his house.";
var sentence3 = "Otto needs Xanax.";

function stringToArrayOfWords(s) {
    var words = s.split(' ');

    console.log(words);
    for(i = 0; i < words.length; i++){
        words[i] = words[i].replace(/[^a-zA-Z]+/g, "");

        var letters =  words[i].split("");
        document.getElementById("result").innerHTML = letters;
    
        console.log(letters);
    
        // Replace the contents of the "result" div with the merged showOnpage array.
        document.getElementById("result1").innerHTML = words.join(" ");

        var reveredArray = [];
        var reverseAndJoin = "";

        for( var j = letters.length -1; j >= 0; j--) {
            reverseAndJoin += letters[j];
            console.log(reverseAndJoin);
            reveredArray.push(reverseAndJoin[j]);
            document.getElementById("result2").innerHTML = reveredArray.join("");

            console.log(reveredArray);

        }

    }

}


