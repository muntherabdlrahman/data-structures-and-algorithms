const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(values) {
    let newNode = new Node(values);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length+1;
    return this.head;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(`current is ${value}`);
        return true;
      }
      current = current.next;
    }
    console.log(`${value}`);
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error("not exisit");
    }

    let format = "";
    while (current) {
      format += `{${current.value}}-->`;
      current = current.next;
    }
    return (format += "NULL");
  }
}

let theAllNodes = new LinkedList();
theAllNodes.insert("a");
theAllNodes.append("b");
theAllNodes.insert("c");
theAllNodes.append("c")



console.log(theAllNodes.toString());
console.log(theAllNodes.includes("b"));




module.exports=LinkedList