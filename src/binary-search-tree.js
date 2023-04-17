const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const addNode = (node, data) => {
      if(!node) {
        return new Node(data);
      } 
      
      if(node.data === data) {
        return node;
      }

      if(node.data > data) {
        node.left = addNode(node.left, data);
        return node;
      } 

      if(node.data < data) {
        node.right = addNode(node.right, data);
        return node;
      }
    };

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    const hasNode = (node, data) => {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(node.data > data) {
        return hasNode(node.left, data);
      }

      if(node.data < data) {
        return hasNode(node.right, data);
      }
    };

    return hasNode(this.rootNode, data);
  }

  find(data) {
    const findNode = (node, data) => {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if(node.data > data) {
        return findNode(node.left, data);
      }

      if(node.data < data) {
        return findNode(node.right, data);
      }
    };

    return findNode(this.rootNode, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if(!node) {
        return null;
      } 

      if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } 

      if(node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } 

      if(node.data === data) {
        if(!node.left && !node.right) {
          return null;
        } 

        if(!node.left) {
          node = node.right;
          return node;
        } 

        if(!node.right) {
          node = node.left;
          return node;
        } 

        if(node.right && node.left) {
          let midNode = node.left;

          while(midNode.right) {
            midNode = midNode.right;
          }

          node.data = midNode.data;
          node.left = removeNode(node.left, midNode.data);
          return node;
        }
      }
    };

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let node = this.rootNode;

    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this.rootNode;

    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};