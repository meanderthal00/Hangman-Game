// stating variables

var words1 = ["elves", "orcs", "halflings", "wizard", "fighter", "thief", "beholder", "dragon", "goblins", "dungeon master"];
var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];
var right = [];
var wrong = [];
var answer = [];

var letterTried = [];
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
document.getElementById("remainingGuesses").innerHTML = tries;

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

// displaying user's guessed letters
function letterGuess() {
    document.getElementById("guessed").innerHTML = letterTried.join(",");
}
// key press events
function userGuess() {
    document.onkeyup = function (event) {
        // making key press a variable
        var letter = event.key;
        // converting it to lowercase
        letter.toLowerCase();
        // checking to see if it is a letter
        if (possibleLetters.indexOf(letter) >= 0) {
            // checking to see if already guessed
            if (letterTried.indexOf(letter) === -1) {
                // adding guess to array of guessed letters
                letterTried.push(letter);
                letterGuess();
                tries = tries - 1;
                document.getElementById("remainingGuesses").innerHTML = tries;
                // checking input against letterArray
                for (var j = 0; j < letterArray.length; j++) {
                    if (letterArray[j] === letter) {
                        // if letter matches the array, it replaces the dash 
                        dashArray[j] = letter;
                        console.log("the dash Array is " + dashArray[j]);
                    }
                    if (dashArray.toString() == letterArray.toString()) {
                        winTotal++;
                        document.getElementById("wins").innerHTML = winTotal;
                        reset();
                    }
                    dashReplace();
                    if (tries === 0) {
                        document.getElementById("target").innerHTML = word;
                        reset();
                    }
                }
            } else {
                alert("Letter already guessed, try again!")
            }
        } else {
            alert("Please enter a letter!")
        }
    }
}  

function reset() {
    letterTried = [];
    tries = 15;
    document.getElementById("remainingGuesses").innerHTML = tries;
    console.log(dashArray);
    word = randomWord();
    console.log(word);
    dashArray = [];
    dashes();
    console.log(dashArray);
    userGuess();

}


// function calls
randomWord();
dashes();
userGuess();
