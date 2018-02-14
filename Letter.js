function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
  this.visible = function (){
    if (this.guessed === true ){
      return letter
    }
    return "_"
  };
  this.guess = function (guess){
    if (this.letter === guess ){
      this.guessed = true;
      this.visible()
    }
  }
};

module.exports = Letter;
