"use strict";


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
    let queue = [tree];
    let result = [];
    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      console.log(value);
      result.push(value);
      if (item.left != null) {
        queue.push(item.left);
      }

      if (item.right != null) {
        queue.push(item.right);
      }
    }
    return result;
  }
}




module.exports = BinaryTree;