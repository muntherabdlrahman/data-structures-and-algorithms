"use strict";

const Node = require("./node");

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let result = [];
    let travers = (node) => {
      result.push(node.value);
      if (node.left) {
        travers(node.left);
      }
      if (node.right) {
        travers(node.right);
      }
    };
    travers(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    let travers = (node) => {
      if (node.left) {
        travers(node.left);
      }
      result.push(node.value);
      if (node.right) {
        travers(node.right);
      }
    };
    travers(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let travers = (node) => {
      if (node.left) {
        travers(node.left);
      }
      if (node.right) {
        travers(node.right);
      }
      result.push(node.value);
    };
    travers(this.root);
    return result;
  }

  findMaximumValue() {
    if (!this.root) {
      return "the tree is empty";
    }
    let maxNumber = this.root.value;
    let travers = (node) => {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      if (node.value > maxNumber) maxNumber = node.value;
    };

    travers(this.root);
    return maxNumber;
  }

  breadthFirstSearch(tree) {
    if (!this.root) {
      return "empty";
    }
    let queue = [tree];
    let result = [];
    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      console.log(value);
      result.push(value);
      if (item.left == null && item.right == null) {
        continue;
      }
      if (item.left != null) {
        queue.push(item.left);
      }

      if (item.right != null) {
        queue.push(item.right);
      }
    }
    return result;
  }

  compareTree(treeOne,treeTwo) {
    let count1=0;
    let count2=0;
    let flag=false;
    
    let treverse=(treeOne)=>{
      if(treeOne.left==null && treeOne.right==null){
        count1++;
      }
      if(treeOne.left != null){
        treverse(treeOne.left);
      }
      if(treeOne.right != null){
        treverse(treeOne.right);
      }
    }

    let treverse2=(treeTwo)=>{
      if(treeTwo.left==null && treeTwo.right==null){
        count2++;
      }
      if(treeTwo.left != null){
        treverse2(treeTwo.left);
      }
      if(treeTwo.right != null){
        treverse2(treeTwo.right);
      }
    }
    treverse(treeOne)
    treverse2(treeTwo)

    if (count1 == count2) {
      flag =true;
    }
    // console.log(count1,count2);
    return flag;
  }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

let treeOne = new BinaryTree();

treeOne.root = one;
// -----------------------------------------
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

let treeTwo = new BinaryTree();

treeTwo.root = node1;

// console.log(treeTwo.compareTree(one,node1));
// console.log(treeOne.compareTree(one,node1));


module.exports = BinaryTree;