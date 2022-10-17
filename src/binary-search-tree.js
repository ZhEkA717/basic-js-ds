const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {
    this.rootEl = addWithin(this.rootEl);

    function addWithin(node) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootEl);

    function searchWithin(node) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.rootEl = removeNode(this.rootEl,data);

    function removeNode(node){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left,data);
        return node;
      }else if(node.data < data){
        node.right = removeNode(node.right,data);
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
        node.data = minFormRight.data;
        node.right = removeNode(node.right,minFormRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootEl) {
      return null;
    }

    let node = this.rootEl;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootEl) {
      return null;
    }

    let node = this.rootEl;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  find(data) {

    function findNode(node) {
      if (!node) {
        return null;
      }

      if(node.data === data){
        return node;
      }else if(node.data > data){
        return findNode(node.left);
      }else{
        return findNode(node.right);
      }
    }

    return findNode(this.rootEl);
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