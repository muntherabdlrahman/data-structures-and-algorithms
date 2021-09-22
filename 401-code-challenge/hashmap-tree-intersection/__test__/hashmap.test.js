"use strict";
const Node = require("../node");
const HashmapTreeIntersection = require("../hashmap-tree-intersection");

describe("Hash Map Tree Intersection", () => {
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(9);
  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  let tree = new HashmapTreeIntersection();
  tree.root = one;
  // -----------------------------------------
  let node1 = new Node(1);
  let node2 = new Node(20);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(7);
  node1.left = node2;
  node1.right = node3;
  node3.left = node4;
  node3.right = node5;
  let tree2 = new HashmapTreeIntersection();
  tree2.root = node1;
  it("return the common nodes between first tree & second tree", () => {
    let expected = [1, 3, 4];
    let trees = new HashmapTreeIntersection();
    expect(trees.treeIntersection(one, node1)).toEqual(expected);
  });

  it("throw error if one of trees is empty", () => {
    let trees = new HashmapTreeIntersection();
    expect(() => {
      trees.treeIntersection();
    }).toThrow("there is no root to comapare");
  });

  it("intersects case", () => {
    let node1 = new Node(1);
    let node2 = new Node(20);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(7);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;

    let tree2 = new HashmapTreeIntersection();
    tree2.root = node1;

    let treess = new HashmapTreeIntersection();
    expect(treess.treeIntersection(one, node1)).toStrictEqual([1, 3]);
  });
});