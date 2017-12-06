var Letter = function(lets){

	this.current = "_"
	this.theLetters = lets;
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.theLetters == letter){
			this.current = this.theLetters; 
			return true;
		}
			return false;
	}
	//Function that tells us whether or not the letter or the "_" should appear.
	this.letterShows = function(){
		return this.current;
	}
};

module.exports = Letter;