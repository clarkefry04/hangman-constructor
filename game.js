var Word = require("./words.js");

//randomly selects a word for the user from the .wordBank array.
var Game = function(){
	this.wordBank = ['santa', 'scrooge', 'grinch', 'elf', 'rudolph', 'prancer', 'blitzen', 'mrsclaus', 'jackfrost', 'georgebailey', 'clarkgriswold', 'cousineddie', 'krampus', 'cindylouwho', 'dasher', 'dancer', 'comet', 'vixen', 'cupid'];

	this.randomWord = this.wordBank[ Math.floor(Math.random() * this.wordBank.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();


module.exports = Game;