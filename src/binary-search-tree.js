const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(value) {
    this.root = addWithin(this.root);

    function addWithin(node) {
      if (!node) {
        return new Node(value);
      }
      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return searchWithin(this.root);

    function searchWithin(node) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ?
        searchWithin(node.left, value) :
        searchWithin(node.right, value);
    }
  }

  remove(value) {
    this.root = removeNode(this.root,value);

    function removeNode(node){
      if(!node){
        return null;
      }

      if(value < node.value){
        node.left = removeNode(node.left,value);
        return node;
      }else if(node.value < value){
        node.right = removeNode(node.right,value);
        return node;
      }else{
        if(!node.left && !node.right){
          return null;
        }

        if(!node.left){
          node = node.right;
          return node;
        }

        if(!node.right){
          node = node.left;
          return node;
        }

        let minFormRight = node.right;
        while(minFormRight.left){
          minFormRight = minFormRight.left;
        }
        node.value = minFormRight.value;
        node.right = removeNode(node.right,minFormRight.value);
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }

  find(value) {

    function findNode(node) {
      if (!node) {
        return null;
      }

      if(node.value === value){
        return node;
      }else if(node.value > value){
        return findNode(node.left);
      }else{
        return findNode(node.right);
      }
    }

    return findNode(this.root);
  }
}

let tree = new BinarySearchTree();

tree.add(3);
tree.add(2);
tree.add(1);

console.log(tree.has(1));
console.log(tree.has(2));
console.log(tree.has(3));

console.log(tree.remove(3));

console.log(tree.max());
console.log(tree.min());

console.log(tree.find(3));
console.log(tree.find(2));
console.log(tree.find(1));

module.exports = {
  BinarySearchTree
};