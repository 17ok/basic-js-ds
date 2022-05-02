const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
//function workBT(){
/*class Node{
  constructor(value){
    this.value = value;
    //this.parent = null;
    this.left = null;
    this.right = null;
  }
}*/
//}
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

 root() {
  return this.treeRoot;
 }

 add(data){
   let cur = this.treeRoot;
   if (!this.treeRoot){
     this.treeRoot = new Node(data);
   } else {
     while (cur) {
      if (data < cur.data) {
        if (!cur.left){
         cur.left = new Node(data);
         return;
        } cur = cur.left;
      } else {
        if (!cur.right){
          cur.right = new Node(data);
          return;
        } cur = cur.right;
      } 
     }
    }
  }
    
      
has(data) {
    let cur = this.treeRoot;
    
   while (cur) {
     if (data === cur.data){
       return true;
     } else if (data > cur.data){
       if (!cur.right) return false;
       cur = cur.right;
     } else {
       if (!cur.left) return false;
       cur = cur.left;
     }
   }
   return false;
   
  }

find(data) {
    let cur = this.treeRoot;
    while (cur) {
      if (cur.data === data) {
        return cur;
      } else if (data < cur.data) {
        if (!cur.left) return null;
        cur = cur.left;
      } else {
        if (!cur.right) return null;
        cur = cur.right;
      }
    }
    return null;
    }
min() {
      if(!this.treeRoot){
        return null;
      }
        let cur = this.treeRoot;
        while(cur.left){
          cur = cur.left;
        }
        return cur.data;
    }
max() {
      if(!this.treeRoot){
        return null;
      }
        let cur = this.treeRoot;
        while(cur.right){
          cur = cur.right;
        }
        return cur.data;
    }

 remove(data) {
      this.root = removeNode(this.treeRoot, data);
 
     function removeNode (node, data) {
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


 
}



module.exports = {
  BinarySearchTree
};