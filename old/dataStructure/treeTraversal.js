// ====================================================================================
// TREE TRAVERSAL
// ====================================================================================

//------------------------------------------------------
// 1. Breath First Search
//------------------------------------------------------
// - fewer nodes to keep track of

// WHEN TO USE
// - TIME COMPLEXITY
// - SPACE COMPLEXITY

// STEPS:
// 1. Start from root (top)
// 2. then go down, L to R
// 3. L to R till end

// [10,6,15,3,8,20]
// 1.       10
// 2.     6    15
// 3.   3  8    20

// PSEUDOCODE
// - create a queue (FIFO) & a variable to store the values of nodes visited
// - place the root node in the queue
// - loop as long as there is anyth in the queue
//    -> dequeue a node from queue & push the val of the node into the var that stores the nodes
//    -> if left property is dequeued, add it to the queue
//    -> if right property is dequeued, add it to the queue
// - return the var that stores the values

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeTraversal {
  constructor() {
    this.root = null;
  }
  // insert new elem to end of list
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // breath first search
  breathFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
      return data;
    }
  }

  // depth first search - PreOrder
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }
  // depth first search - PostOrder
  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
        if (node.left) {
            traverse(node.left)
        }

        if (node.right) {
            traverse(node.right)
        }

        data.push(node.value)
    }
    traverse(current)
    return data;
  }

  // depth first search - InOrder
  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
        if (node.left) {
            traverse(node.left)
        }
        data.push(node.value)

        if (node.right) {
            traverse(node.right)
        }
    }
    traverse(current)
    return data
  }
}

let tree = new TreeTraversal();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
tree.DFSPreOrder();
//------------------------------------------------------
// 2. Depth First Search
//------------------------------------------------------
// - InOrder, PreOrder, PostOrder

// PREORDER
// - can be used to 'export' a tree structure so that it is easily reconstructed or copied

// INORDER
// - used commonly w Binary Search Tree
// - get all nodes in the tree in their underlying order

//------------------------------------------------------
// PREORDER
//------------------------------------------------------

// STEPS:
// 1. Start from root (top)
// 2. then go down, L
// 3. down left again, then right
// 4. if no more nodes, go back to root (top)
// 5. repeat step 2 & 3

// [10,6,3,8,15,20]
// 1.       10
// 2.     6    15
// 3.   3  8    20

// PSEUDOCODE (steps - recursive)
// - create variable to store the values of nodes visited
// - store root of BST in a a variable called current
// - write a helper function which accepts a node
//    -> push value of node to variable that stores the values
//    -> if node has a Left property, call helper function w left property on the node
//    -> if node has a Right property, call helper function w Right property on the node
// - invoke helper function w current variabke
// - return array of values


//------------------------------------------------------
// POSTORDER
//------------------------------------------------------

// STEPS:
// 1. Start from most btm left
// 2. then go right
// 3. go up, and repeat steps till u at 2nd top layer of tree 
// 4. if the node is before the root, jump to the right side and repeat step 1-3 
// 5. last is the root 

// [3,8,6,20,15,10]
// 1.       10
// 2.     6    15
// 3.   3  8    20

// PSEUDOCODE (steps - recursive)
// - create variable to store the values of nodes visited
// - store root of BST in a a variable called current
// - write a helper function which accepts a node
//    -> if node has a Left property, call helper function w left property on the node
//    -> if node has a Right property, call helper function w Right property on the node
//    -> push value of node to variable that stores the values
// - invoke helper function w current variable
// - return array of values


//------------------------------------------------------
// INORDER
//------------------------------------------------------

// STEPS:
// 1. Start from root and traverse all the way down to the btm left 
// 2. then go up, and down to the right side of the node 
// 3. go to root
// 4. repeat step 1 & 2, on the root's right side  


// [3,6,8,10,15,20]
// 1.       10
// 2.     6    15
// 3.   3  8    20

// PSEUDOCODE (steps - recursive)
// - create variable to store the values of nodes visited
// - store root of BST in a a variable called current
// - write a helper function which accepts a node
//    -> if node has a Left property, call helper function w left property on the node
//    -> push value of node to variable that stores the values
//    -> if node has a Right property, call helper function w Right property on the node
// - invoke helper function w current variable
// - return array of values