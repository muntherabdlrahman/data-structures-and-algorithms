"use strict";

const BinaryTree = require("../binaryTree");
const Node = require("../node");
const fizzBuzzTree = require("../fizz-buzz-tree");

describe("binary tree", () => {
  it("if value divisible by 3", () => {
    let tree = new BinaryTree();
    tree.root = new Node(3);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual("Fizz");
  });

  it("if value divisible by 5", () => {
    let tree = new BinaryTree();
    tree.root = new Node(5);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual("Buzz");
  });

  it("if value divisible by 5 & 3", () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual("FizzBuzz");
  });

  it("if value not divisible by 5 & 3", () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual("7");
  });
});