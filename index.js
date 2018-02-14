var inquirer = require("inquirer");

var Word = require("./Word");

var games=['frog', 'dog', 'cat']

var game = games[0]

var word = new Word(game)


var playGame = function(word, guessesLeft) {

  if (guessesLeft > 0) {
    if (word.word != word.wordState()) {

      inquirer.prompt([
        {
          name: "guess",
          message: "guess a letter"
        }
      ]).then(function(guess) {

        word.guessLetter(guess.guess)
        console.log(word.word)
        console.log(word.wordState())

        guessesLeft --;
        playGame(word, guessesLeft)

      });
    }
    else {
      console.log("you win!");
    }
  }else{
    console.log("GAME OVER: out of guesses :(")
  }

};

playGame(word, 5)
