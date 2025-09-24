// ======================================================
// BINARY SEARCH TREE
// ======================================================

// A tree data structure where each node has at most 2 children (commonly called left and right)

// Rules:
// - All values in the LEFT subtree of a node are LESS than the node’s value.
// - All values in the RIGHT subtree of a node are GREATER than the node’s value.
// - No duplicates (usually)—though some variations allow them with specific rules.

// -------------------------------
// Example (follows BST rules):
// -------------------------------
// #1:
//     5
//    / \
//   2   7
//  / \    \
// 1   3    9

// #2:
//      8
//    /   \
//   3    10
//  / \      \
// 1   6      14
//    / \     /
//    4   7  13

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Search
// Avg: O(log n) | Worst: O(n)

// Insert
// Avg: O(log n) | Worst: O(n)

// Delete
// Avg: O(log n) | Worst: O(n)

// ** Worst case happens when the tree is skewed (like a linked list) **

// -------------------------------
// When to Use a BST
// -------------------------------
// - When you need fast lookups, inserts, and deletes (better than arrays/lists if balanced)
// - When data is dynamic (changing often)
// - When you want to store sorted data and also need range queries (e.g., find all numbers between 5 and 12)
// - Efficient in searching, sorting, inserting and deleting.

// -------------------------------
// When Not to Use a BST
// -------------------------------
// - If the tree is not balanced, performance degrades to O(n).
// - If you only need sorted data, a simple array + binary search might be easier.
// - For massive data, self-balancing BSTs (like AVL Tree, Red-Black Tree, B-Trees) are better.

class BinarySearchTreeNode<T> {
  value: T;
  left: BinarySearchTreeNode<T> | null;
  right: BinarySearchTreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: BinarySearchTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new BinarySearchTreeNode(value);

    // check if there is a root / any element in the tree
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    // loop thru the trees
    while (true) {
      // if new value is lesser than root, go left
      if (value < current.value) {
        // check if current node's left side has a node
        if (!current.left) {
          current.left = newNode;
          return;
        }
        // if has a node, set current to the next node and iterate again
        current = current.left;
      }

      // if new value is greater than root, go right
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        // if has a node, set current to the next node and iterate again
        current = current.right;
      }

      // duplicate value
      if (value === current.value) return;
    }
  }

  search(value: T) {
    console.log("----- SEARCHING -----");
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        console.log("going left");
        current = current.left!; // set child's node as the new current
      } else if (value > current.value) {
        console.log("going right");
        current = current.right!; // set child's node as the new current
      } else {
        console.log("FOUND: ", current);
        return true;
      }
    }
    console.log("not found!");
    return false;
  }

  // in-order traversal (left > root > right)
  inorder(node: BinarySearchTreeNode<T> | null = this.root): void {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }
}

const bst = new BinarySearchTree<number>();
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(3);
bst.insert(5);
// console.log("bst", bst);
// bst.search(0);
bst.inorder(); // 1,2,3,4,5