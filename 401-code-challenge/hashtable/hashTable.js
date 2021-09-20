"use strict";

const LinkedList = require("./linkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, cur) => {
        return acc + cur.charCodeAt(0);
      }, 0) *
        19) %
      this.size
    );
  }

  add(key, val) {
    let hash = this.hash(key);
    console.log(hash);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let entry = { [key]: val };
    this.map[hash].append(entry);
  }

  get(key) {
    let hash = this.hash(key);

    if (!this.map[hash]) return "Dose not exist";

    let index = this.map[hash];
    let current = index.head;
    if (current.val[key]) return current.val[key];

    while (current.next) {
      current = current.next;
      if (current.val[key]) return current.val[key];
    }
  }

  contain(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;

    let index = this.map[hash];

    if (!index.head) {
      return false;
    } else {
      let current = index.head;
      if (current.val[key]) return true;

      while (current.next) {
        current = current.next;
        if (current.val[key]) return true;
      }
    }
  }
}

const hashmap = new HashTable(1024);
hashmap.add("name", "Samah");
hashmap.add("age", 23);
hashmap.add("cat", "Kitty");
hashmap.add("act", "Jonny Depp");

console.log("a", hashmap);
console.log("b", hashmap.map[755]);
console.log("c", hashmap.map[599]);
console.log("d", hashmap.map[808]);
// console.log('e',hashmap.map[808].head.next);

console.log("get method", hashmap.get("act"));
console.log("get method", hashmap.contain("age"));

module.exports = HashTable;