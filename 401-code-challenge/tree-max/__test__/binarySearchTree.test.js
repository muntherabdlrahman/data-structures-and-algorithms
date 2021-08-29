"use strict";

const BinarySearchTree = require("../binarySearchTree");

describe("Binary Search & Binary Search Tree", () => {
  it("Can successfully instantiate an empty tree", () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it("Can successfully instantiate a tree with a single root node",()=>{
    let tree = new BinarySearchTree();
    tree.add(1);
    expect(tree.root.value).toEqual(1);
    expect(tree.contains(1)).toEqual(true);
  })

  it("Can successfully add a left child and right child to a single root node",()=>{
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(1);
    tree.add(9);
    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(9);
  })
  it("Can successfully return a collection from a preorder traversal",()=>{
    let expextedValue=[ 20,11,3,9,14,31,62,57,72,90]
    let tree=new BinarySearchTree();
    tree.add(20)
    tree.add(31)
    tree.add(11)
    tree.add(3)
    tree.add(9)
    tree.add(62)
    tree.add(57)
    tree.add(72)
    tree.add(14)
    tree.add(90)
    console.log('=======>>>>',tree.preOrder());
    expect(tree.preOrder()).toEqual(expextedValue);
  })
  it("Can successfully return a collection from an inorder traversal",()=>{
    let expextedValue=[ 3,9,11,14,20,31,57,62,72,90]
    let tree=new BinarySearchTree();
    tree.add(20)
    tree.add(31)
    tree.add(11)
    tree.add(3)
    tree.add(9)
    tree.add(62)
    tree.add(57)
    tree.add(72)
    tree.add(14)
    tree.add(90)
    console.log('=======>>>>',tree.inOrder());
    expect(tree.inOrder()).toEqual(expextedValue);
  })
  it("Can successfully return a collection from a postorder traversal",()=>{
    let expextedValue=[ 9,3,14,11,57,90,72,62,31,20]
    let tree=new BinarySearchTree();
    tree.add(20)
    tree.add(31)
    tree.add(11)
    tree.add(3)
    tree.add(9)
    tree.add(62)
    tree.add(57)
    tree.add(72)
    tree.add(14)
    tree.add(90)
    console.log('=======>>>>',tree.postOrder());
    expect(tree.postOrder()).toEqual(expextedValue);
  })

});
