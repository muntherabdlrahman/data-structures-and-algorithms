"use strict";

const BinaryTree = require("../binaryTree");
const Node = require("../node");

describe("Compare between two tress with different files or folders", () => {
  it("Comparing same number of files but different number of file directories(folder) ", () => {
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
    expect(treeOne.compareTree(one,node1)).toEqual(true);
  });

  it("Comparing different number of files but same number of file directories(folder)", () => {
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
 

    let treeTwo = new BinaryTree();

    treeTwo.root = node1;
    expect(treeTwo.compareTree(one,node1)).toEqual(false);
  });
});