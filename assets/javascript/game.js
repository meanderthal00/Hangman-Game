var words1 = ["elves","orcs","halflings","wizard","fighter","thief","beholder","dragon","goblins","dungeon master"];
var playerGuess =
// recording user keypress
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letter);
    var letter = document.getElementById("guessed").innerHTML = letter;
    
}
// selecting random word
var word = words1[Math.floor(Math.random() * words1.length)];
console.log(word);
var remainingLetters = word.length;

// displaying the answer array
var answerArray = document.getElementById("demo");
for (var i = 0; i < remainingLetters; i++) {
    answerArray.innerHTML += "_"
};
// the game loop starts here
// while (remainingLetters > 0) {

// alert ("Good job! the answer was " + word + ".");