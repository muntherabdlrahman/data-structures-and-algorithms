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

  it("breadth first", () => {
    let expectedValue = [2, 7, 5, 2, 6, 9, 5, 11, 4];

    let one = new Node(2);
    let two = new Node(7);
    let four = new Node(2);
    let five = new Node(6);
    let three = new Node(5);
    let six = new Node(9);
    let seven = new Node(5);
    let eight = new Node(11);
    let nine = new Node(4);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.right = six;
    five.left = seven;
    five.right = eight;
    six.left = nine;

    let tree = new BinaryTree();

    tree.root = one;
    expect(tree.breadthFirstSearch(one)).toEqual(expectedValue);
  });

  it("return if empty", () => {
    let tree = new BinaryTree();
    expect(tree.findMaximumValue()).toEqual("the tree is empty");
  });
});