const Hashmap = require("./hashTable");

function repeatedWord(str) {
  let words = str.toLowerCase().split(" ");
  let hashmap = new Hashmap(words.length);
  for (let i = 0; i < words.length; i++) {
    if (!hashmap.contain(words[i])) {
      hashmap.add(words[i], words[i]);
    } else {
      return words[i];
    }
  }
  return null;
}

let para ="Once upon a time, there was a brave princess who...";
let para2="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

console.log("paragraph 1: ",repeatedWord(para));
console.log("paragraph 2: ",repeatedWord(para2));

module.exports=repeatedWord;