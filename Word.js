var Letter = require("./Letter");

function Word(word) {
  this.word = word;
  this.wordArray = word.split("")
  this.guessArray=[];
  for (var index = 0; index<this.wordArray.length; index++ ){
    var letter = new Letter(this.wordArray[index])
    this.guessArray.push(letter)
  };
  this.wordState = function(){
    var display = '';
    for (var index = 0; index<this.guessArray.length; index++ ){
      display += this.guessArray[index].visible()
    }
    return display
  };
  this.guessLetter = function(letter){
    for (var index = 0; index<this.guessArray.length; index++ ){
      this.guessArray[index].guess(letter)
    }
    this.wordState()
  }
}

module.exports = Word;
