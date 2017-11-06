var words1 = [
    "elves",
    "orcs",
    "halflings",
    "wizard",
    "fighter",
    "thief",
    "beholder",
    "dragon",
    "goblins",
    "dungeon master"

];

/* var el = document.getElementById("demo");
 el.innerHtml = words1; */

var word = words1[Math.floor(Math.random() * words1.length)];

// set up answer array

var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
    }

    var el = document.getElementById("demo");
    el.innerHtml = answerArray;