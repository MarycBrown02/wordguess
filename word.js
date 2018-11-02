var letter = require("./Letter.js");

console.log("conected")

var letter = require('./Letter.js');

var wordLogic = function(currentWord) {
    // word to be guessed
    this.word = currentWord;
    // array
    this.letterArray = [];
    this.correct = false;

    // words into letter
    this.splitWord = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(new letter.Letter(this.word[i]));
        };
        
    };

    // ENDGAME 
    this.checkWordGuess = function() {
        var letterRight = 0;

        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].showLetter === true) {
                letterRight += 1;
            }
        };

        if (letterRight === this.letterArray.length) {
            this.correct = true;   
        } else {
            this.correct = false;
        };

        return this.correct;
    };

    // if letter is there show the letter
    this.letterFound = function (guessPrompt) {
        var numberFound = 0;
        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].wordLetter === guessPrompt) {
                this.letterArray[i].showLetter = true;
                numberFound += 1;
            };
       };
       // how many letters found
       return numberFound;
    };
    
    // words and letters
    this.wordGuessResult = function () {
        var line = '';
        for (var i = 0; i < this.letterArray.length; i++) {
            line += this.letterArray[i].letterAppear();
       };
       return line;
    };
};


//export needed for index.js
exports.wordLogic = wordLogic;













