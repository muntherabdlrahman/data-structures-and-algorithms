"use strict";

const BinaryTree = require("../binaryTree");
const Node = require("../node");


describe("binary tree", () => {
  it("return max value", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;
    let expected = 5;
    expect(tree.findMaximumValue()).toEqual(expected);
  });

  it("return if empty", () => {
    let tree = new BinaryTree();
    expect(tree.findMaximumValue()).toEqual('the tree is empty');
  });
});
