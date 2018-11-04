var wordBank = ["flat","platform","seamstress","act", "actor","audition","apron", "cast","crue","director","understudy"];
var random = Math.floor(Math.random()*wordBank.length);
var randomWord = wordBank[random];

module.exports = randomWord;
