// stating variables

var words1 = ["elves", "orcs", "halflings", "wizard", "fighter", "thief", "beholder", "dragon", "goblins", "dungeon master"];
var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];
var right = [];
var wrong = [];
var answer = [];


var letterArray = [];
var word = randomWord();
var dashArray = [];
// beginning settings
var winTotal = 0;
var lossTotal = 0;
var tries = 15;
// writes above to the html
document.getElementById("wins").innerHTML = winTotal;
document.getElementById("losses").innerHTML = lossTotal;

// function that turns a string into an array of characters
function wordToArray(arrWord) {
    letterArray = arrWord.split("");

}

// selecting random word
function randomWord() {
    return words1[Math.floor(Math.random() * words1.length)];
    // console.log(word + "  is the selected word");
}

// Function that displays answer blanks and letters
function dashReplace() {
    if (dashArray) {
        document.getElementById("target").innerHTML = dashArray.join(" ");
    }
}

// creating dashes
function dashes() {
    wordToArray(word);
for (var i = 0; i < letterArray.length; i++) {
    dashArray.push("_");
}
dashReplace();
console.log(dashArray);

}
//  remainingLetters; i++) {
//     answerArray.innerHTML += "_"
// };

// recording user keypress
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letter + " was pressed");
    var letter = document.getElementById("guessed").innerHTML = letter;


    // checking users input against the answers
    if (word.indexOf(letter) === -1) {
        // console.log(letter);
        // moving incorrect guesses to "wrong" array
    } else if (letter.indexOf(word) != -1) {
        wrong.push(letter);
        console.log(wrong);

    } else {
        console.log(letter);
        for (var j = 0; j < word.length; j++) {
            right[j] = letter;
            remainingLetters--;
            document.getElementById("target").innerHTML = answer.join(letter);


        }
    }
}