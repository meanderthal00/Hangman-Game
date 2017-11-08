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

// document.onkeyup = function(event) {var guess = }
var word = words1[Math.floor(Math.random() * words1.length)];
    console.log(word);
// set up answer array
var remainingLetters = word.length;

var answerArray = document.getElementById("demo");
for (var i = 0; i < remainingLetters; i++) {
   answerArray.innerHTML += "_"
    };  
 
// creating var to keep track of letters that remain to be guessed


// the game loop starts here
while (remainingLetters > 0) {
    // show the player progress
    var el = document.getElementById("demo");
    el. innerHTML = answerArray(" ");
    // get guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null){
        // exit the game loop
        break;
    } else if (guess.length !== 1);{
        alert("Please enter a single letter");        
    // } else (guess=== words1)
        //  {
        // update the game state with the guess
        for (var j = 0; j < word.length; j++){
            if (word[j] === guess) {
                answerArray[j]= guess;
                remainingLetters --;

            }
        }
    }
// the end of the game loop  below  
}

el. innerHTML = answerArray.join(" ");
alert ("Good job! the answer was " + word + ".");

