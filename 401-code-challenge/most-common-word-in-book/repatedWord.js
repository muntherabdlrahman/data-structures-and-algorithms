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

let para = "In a galaxy far far away";
let para2 = "Taco cat ate a taco";
let para3 = "No no . Try not. Do or  not. There is no try. ";

console.log("paragraph 1: ", repeatedWord(para));
console.log("paragraph 2: ", repeatedWord(para2));
console.log("paragraph 2: ", repeatedWord(para3));

module.exports = repeatedWord;
