"use strict";

const BinaryTree = require("./binaryTree");
const Node = require("./node");

function fizzBuzzTree(tree) {
  function fizzBuzzValue(value) {
    let StringFizzBuzz;
    if (value % 5 === 0 && value % 3 === 0) {
      StringFizzBuzz = "FizzBuzz";
      console.log(StringFizzBuzz)
    } else if (value % 5 === 0) {
      StringFizzBuzz = "Buzz";
      console.log(StringFizzBuzz)
    } else if (value % 3 === 0) {
      StringFizzBuzz = "Fizz";
      console.log(StringFizzBuzz)
    } else {
      StringFizzBuzz = value.toString();
      console.log(StringFizzBuzz)

    }
    return StringFizzBuzz;
    
  }

  function trevers(tree) {
    let result = {};
    for (const key in tree) {
      const value = tree[key];
      if (value && typeof value === "object") {
        result[key] = trevers(value);
      } else {
        result[key] = fizzBuzzValue(value);
      }
    }
    return result;
  }
  return trevers(tree);
}

let tree = new BinaryTree();
let node0= new Node(2);
let node1=new Node(5);
let node2=new Node(7);
let node3=new Node(15);
let node4=new Node(20);
let node5=new Node(23);
let node6=new Node(25);
let node7=new Node(30);
let node8=new Node(31);




node0.children.push(node1);
node1.children.push(node2);
node2.children.push(node3);
node3.children.push(node4);
node4.children.push(node5);
node5.children.push(node6);
node6.children.push(node7);
node7.children.push(node8);



tree.root=node0;

let result = fizzBuzzTree(tree);

// console.log(result.root.children[5]);
module.exports = fizzBuzzTree;