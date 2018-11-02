var Letter = function(guess){

this.wordLetter = guess,
  this.showLetter = false,
  
  this.letterAppear = function(){
    if(this.wordLetter === " "){
        this.showLetter = true;
        return " ";
    }

    if(this.showLetter === true){
        return " " + this.wordLetter + " ";
    }else {
        return "_";
    }

  }

  
};
console.log("letter is conectid")
exports.Letter=Letter;