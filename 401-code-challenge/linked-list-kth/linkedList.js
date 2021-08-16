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
    }
  }

  insertBefore(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    if(current.value===value){
      newNode.next=current;
      this.head=newNode;
    }
    while (current.next) {
      if(current.next.value==value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
  }
  insertAfter(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    while (current) {
      if(current.value==value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
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
  kthFromEnd(k){

      let newLinkedList=[];
      let current=this.head;
      while (current) {
        newLinkedList.push(current.value);
        current=current.next;
      }
      // console.log(newLinkedList.reverse());
      newLinkedList.reverse();

      if(k>=newLinkedList.length || k<0){
        return 'error';
      }else{
        return newLinkedList[k]
      }
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
list.insert('a');
list.append('c');
list.append('i');
list.append('b');
list.insertBefore('b','e');
list.insertBefore('a','z');


console.log(list.toString());
console.log(list.includes('b'));
console.log(list.kthFromEnd('a'));
module.exports=LinkedList