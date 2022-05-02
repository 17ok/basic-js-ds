const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
//function workBT(){
class Node{
  constructor(value){
    this.value = value;
    //this.parent = null;
    this.left = null;
    this.right = null;
  }
}
//}
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

 root() {
  return this.treeRoot;
 }
/*
 add(data){
   const node = this.treeRoot;
   if (node === null){
     this.treeRoot = new Node(data);
     return;
   } else {
     const goTree = function(node){
       if (data < node.data) {
         if (node.left === null){
          node.left = new Node(data);
          return;
         } else {
           return goTree(node.left);
         }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return goTree(node.right);
          }
        } else {
          return null;
        }
       }
return goTree(node);
     }
   }
 */
 
  add(data) {
    this.root = adding(this.treeRoot, data);
    function adding(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (data < node.data){
        node.left = adding(node.left, data);
      } else {
        node.right = adding(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return find(this.treeRoot, data);
    function find(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data){
        return true;
      }
      return data > node.data ? find(node.right, value) : find(node.left, value);
    }
  }

  find(data) {
    /*if (this.has(data) === 'false') {
      return null;}*/
    
    /*  let curr = this.treeRoot;
    while (curr.data !== data) {
      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
      if (curr === null) {
        return null;
      }
    }
    return curr;*/
   
    if (this.has(data) === 'false') {
      return null;
    } else {
      return this.treeRoot;
    }
  }

  remove(data) {
    this.root = removeNode(this.treeRoot, data);

    function removeNode(node, data){
    if(!node){
      return null;
    }
    
    if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = removeNode(node.right, data);
      return node;
    } else {
      //equality
      //leaf
      if (!node.left && !node.right) {
        return null;
      }
      //has only one child
      if (!node.left){
      node = node.right;
      return node;
     }
      if (!node.right){
      node = node.left;
      return node;
      }
    //has two children
    let rightMin = node.right;
    while (rightMin.left){
      rightMin = rightMin.left;
    } node.value = rightMin.value;
    node.right = removeNode(node.right, rightMin.value);
    return node;
    }
  }
  }

 /* min() {
    if(!this.treeRoot){
      return null;
    }
    let curr = this.treeRoot;
    while(curr.left !== null){
      curr = curr.left;
    }
    return curr.data;
  }
*/
  min() {
    if(!this.treeRoot){
      return null;
    }
    let node = this.treeRoot;
    while(node.left){
      node = node.left;
    }
    return node.value;
  }

  max() {
    if(!this.treeRoot){
      return null;
    }
    let node = this.treeRoot;
    while(node.right){
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};