const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
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
      this.length++;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
    }
    while (current.next) {
      if (current.next.value == value) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      current = current.next;
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value == value) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      current = current.next;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(`the ${value} is founded in list`);
        return true;
      }
      current = current.next;
    }
    console.log(`the ${value} is not found in list`);
    return false;
  }
  kthFromEnd(k) {
    let newLinkedList = [];
    let current = this.head;
    while (current) {
      newLinkedList.push(current.value);
      current = current.next;
    }
    // console.log(newLinkedList.reverse());
    newLinkedList.reverse();

    if (k >= newLinkedList.length || k < 0) {
      return "error";
    } else {
      return newLinkedList[k];
    }
  }

  linkedListZip(l1, l2) {
    let l3 = new LinkedList();
    if (!l1.head) {
      return l2;
    }

    if (!l2.head) {
      return l1;
    }
    l3.insert(l1.head.value);
    l3.append(l2.head.value);

    let currentL1 = l1.head;
    let currentL2 = l2.head;
    while (currentL1.next || currentL2.next) {
      if (currentL1.next) {
        l3.append(currentL1.next.value);
        currentL1 = currentL1.next;
      }

      if (currentL2.next) {
        l3.append(currentL2.next.value);
        currentL2 = currentL2.next;
      }
    }

    return l3;
  }
  palindrome() {
    let face1 = this.head;
    let face2 = this.head;
    let newArray = [];

    if (!face1) {
      return false;
    }

    while (face2.next != null && face2.next.next != null) {
      face2 = face2.next.next;
      newArray.push(face1.value);
      face1 = face1.next;
    }
    if (face2.next != null) {
      newArray.push(face1.value);
    }

    while (face1.next) {
      face1 = face1.next;
      if (newArray.pop() !== face1.value) {
        return false;
      }
    }
    return true;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error("the linked list does not exisit");
    }

    let format = "";
    while (current) {
      format += `{${current.value}}-->`;
      current = current.next;
    }
    return (format += "NULL");
  }
}

let list = new LinkedList();
list.insert("h");
list.append("o");
list.append("u");
list.append("s");
list.append("e");

let list2 = new LinkedList();
list2.insert("m");
list2.append("o");
list2.append("o");
list2.append("m");

let list3 = new LinkedList();
list3.insert("t");
list3.append("a");
list3.append("c");
list3.append("o");
list3.append("c");
list3.append("a");
list3.append("t");

console.log(list.palindrome());
console.log(list2.palindrome());
console.log(list3.palindrome());


let l1 = new LinkedList();
l1.insert(1);
l1.append(3);
l1.append(2);
l1.append(7);
l1.append(11);
let l2 = new LinkedList();
l2.insert(5);
l2.append(9);
l2.append(4);

module.exports = LinkedList;