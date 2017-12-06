//main.js contains the logic to "run" the game. Running this in terminal should prompt the user to start the game.

var prompt = require("prompt");
var Game = require('./game.js');
var word = require('./words.js');
var hangmanGame = new Game();
var userGuess = 6;

console.log("Welcome to Christmas Hangman!");
console.log("Guess a lettter of the name of a famous Christmas Character!");
console.log("Good luck!");


	prompt.start(); 
	letTheGameBegin(userGuess);
		function letTheGameBegin(guesses){
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("You win");
				console.log("Final word: " + hangmanGame.currentWord.display());
				return;
			}
			if(guesses <= 0){
				console.log("Game Over!");
				console.log("Correct word: " + hangmanGame.currentWord.words); //displays the correct word without the "_"
				console.log("Play again!");
				return;
			}
		//displays the "_" with the correct number of spaces for the respective word.
		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		if(hangmanGame.currentWord.foundIt(result.theGuess) == false){
			guesses --;
			console.log("Wrong!")
		}
		letTheGameBegin(guesses);

	});
};