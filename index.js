var inquirer = require("inquirer");
var Word = require("./Word");

var games=['frog', 'dog', 'cat']

var guessCount = 5;

var index = 0;


var gameSetup = function(index){
  if (index < games.length){
    console.log("New puzzle started!")
    var game = games[index]
    var word = new Word(game)
    playGame(word, guessCount)
  }else{
    console.log("out of puzzles")
  }
}

var playGame = function(word, guessesLeft) {

  if (guessesLeft > 0) {
    if (word.word != word.wordState()) {

      inquirer.prompt([
        {
          name: "guess",
          message: "guess a letter"
          // validate: function (name) {
          //   return name.length === 1 && name.match(/[a-z]/);
          // }
        }
      ]).then(function(guess) {

        prevState = word.wordState()
        word.guessLetter(guess.guess)

        console.log(word.wordState())

        if (word.wordState()===prevState){
          guessesLeft --;
        }
        console.log(guessesLeft + " bad guesses remaining")
        playGame(word, guessesLeft)

      });
    }
    else {
      console.log("you win!");
      console.log("-------------");
      index ++;
      gameSetup(index)
    }
  }else{
    console.log("GAME OVER: out of guesses :(")
    console.log("-------------");
    index ++;
    gameSetup(index)
  }
};

gameSetup(0)
