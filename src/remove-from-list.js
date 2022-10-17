const {
  NotImplementedError
} = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  head = l;
  length = getLength();

  function getLength(){
    let current = head;
    let count = 0;

    while(current.next){
      count++;
      current = current.next;
    }
    if(current.next === null){
      count++;
    }
    return count;
  }

  let removeAt = function(position){
    if(position<0 || position>= length){
      return null;
    }

    let current = head;

    if(position === 0){
      head = current.next;
    }else{
      let prev = null;
      let index = 0;

      while(index < position){
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }

    length--;
    return current.value;
  }

  let remove = function(element){
    removeAt(indexOf(element));
  }

  let indexOf = function(element){
    let current = head;
    let index = 0;

    while(current){
      if(current.value === element){
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  let changedLinkedList = function () {
  
    let current = head;
  
    while (current.next) {
      if(current.value === k){
        remove(k);
      }
      current = current.next;
    }
    if(current.next===null){
      if(current.value === k){
        remove(k);
      }
    }

    return head;
  }


  return changedLinkedList();
}

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new Node(cur);
//       node.next = acc;
//       return node;
//     }

//     return new Node(cur);
//   }, null);
// }

// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// console.log(removeKFromList(initial, 3));

module.exports = {
  removeKFromList
};
