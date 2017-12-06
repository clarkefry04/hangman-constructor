var Word = require("./words.js");


var Game = function(){
	this.secretWords = ['santa', 'scrooge', 'grinch', 'elf', 'rudolph', 'prancer', 'blitzen', 'mrsclaus', 'jackfrost', 'georgebailey', 'clarkgriswold', 'cousineddie', 'krampus', 'cindylouwho', 'dasher', 'dancer', 'comet', 'vixen', 'cupid'];

	this.randomWord = this.secretWords[ Math.floor(Math.random() * this.secretWords.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();


module.exports = Game;