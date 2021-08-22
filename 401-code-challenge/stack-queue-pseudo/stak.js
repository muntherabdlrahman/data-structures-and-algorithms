"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;

    let temp = this.first;

    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp;
  }

  peek() {
    let value;
    if (this.first) {
      value = this.first.value;
      return value;
    }
    throw new Error("the stack is empty");
  }

  isEmpty() {
    if (!this.first) {
      throw new Error("the stack is empty");
    }
    return "the stack have values";
  }
}

let stack = new Stack();
stack.push(10);
stack.push(15);
stack.push(20);

console.log(stack.isEmpty());

module.exports = Stack;