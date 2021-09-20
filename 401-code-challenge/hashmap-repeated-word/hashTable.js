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


module.exports = HashTable;