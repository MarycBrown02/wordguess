var wordBank = ["Derrick","Mary","Melanie","Gary", "Christine"];
var random = Math.floor(Math.random()*wordBank.length);
var randomWord = wordBank[random];

module.exports = randomWord;
