// ======================================================
// TREE TRAVERSAL
// ======================================================

// Tree traversal means visiting every node in a tree data structure in a particular order

// There are 2 main categories:
// 1. DEPTH-FIRST TRAVERSAL (DFS)
// 2. BREADTH-FIRST TRAVERSAL (BFS)

// =================================
// Depth-First Traversal (DFS)
// =================================
// You go as deep as possible along one branch before backtracking.

// Common Orders:
// ---------------
// 1, PRE-ORDER (Root > Left > Right)
//    > visit root first, then left subtree, then right subtree

// 2. IN-ORDER (Left > Root > Right)
//    > visit left subtree, then root, then right subtree
//    > in a binary search tree (BST), this gives values in sorted order

// 3. POST-ORDER (Left > Right > Root)
//    > visit left subtree, then right subtree, then root

// Example for a tree:
//     A
//    / \
//   B   C
//  / \
// D   E

// Pre-Order: A > B > D > E > C
// In-Order: D > B > E > A > C
// Post-Order: D > E > B > C > A

// =================================
// BREADTH-First Traversal (BFS)
// =================================
// Also called Level Order Traversal
// You visit nodes level by level, starting from the root

// Example for a tree:
//     A
//    / \
//   B   C
//  / \
// D   E

// Level-Order: A > B > C > D > E

// =================================
// Time Complexity 
// =================================

// ---------
// DFS 
// ---------
// DFS: (Preorder, Inorder, Postorder)

// Each node is visited once.
// At each visit, you do O(1) work (print value, check children, etc.).
// Total = O(n) where n = number of nodes in the tree.

// -------------------
// BFS (Level-order)
// -------------------
// Each node is enqueued once and dequeued once.
// Each enqueue/dequeue is O(1).
// Total = O(n) as well


// =================================
// Space Complexity
// =================================

// ----------------
// DFS (recursive)
// ----------------
// Worst case = tree depth = O(h) where h is the height of the tree.
// Balanced tree → O(log n)
// Skewed tree (like a linked list) → O(n)

// ----------------
// BFS (queue)
// ----------------
// Worst case = maximum nodes in one level.
// Balanced tree → about O(n/2) = O(n)
// So BFS can use much more space if the tree is wide.


// =================================
// When to Use a BFS
/// =================================

// How BFS works: Visit level by level (uses a queue).
// Order: Root → All children → Grandchildren → …

// Best used when:
// ---------------
// - You want the shortest path in an unweighted tree/graph
//   (e.g., "fewest steps to reach a node").

// - You want to process nodes by levels
//   (e.g., print tree level by level, hierarchical organization, social network “friends of friends”).

// - Memory isn’t an issue (queue can hold many nodes).
//   > Downside: Can use a lot of memory if the tree is wide (many nodes per level).


// =================================
// When to Use a DFS
// =================================
// How it works: Explore as deep as possible before backtracking (uses recursion or stack).
// Orders: Pre-order, In-order, Post-order.

// Best used when:
// ---------------
// - You need to visit every node (e.g., checking if a node exists).
// - You want all possible paths or need to explore deeper before wider.
// - You need a sorted order (for BST → In-order gives ascending values).
// - Memory is limited (DFS usually needs less space than BFS).
//   > Downside: Doesn’t guarantee shortest path in graphs (unless you check all paths).


// =================================
// Rule of thumb:
// =================================
//  - Need shortest path / level info? → BFS
//  - Need to explore/search/visit everything? → DFS


class TreeTraversalNode<T> {
  value: T;
  left: TreeTraversalNode<T> | null;
  right: TreeTraversalNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeTraversalNode<string>("A");
root.left = new TreeTraversalNode("B");
root.right = new TreeTraversalNode("C");
root.left.left = new TreeTraversalNode("D");
root.left.right = new TreeTraversalNode("E");

// It will look like this:
//     A
//    / \
//   B   C
//  / \
// D   E

// console.log("root: ", root);

function breadthFirstSearch(root: TreeTraversalNode<string>) {
  let queue = [root];
  let data = [];

  while (queue.length) {
    let node = queue.shift(); // remove the first element in the list
    data.push(node?.value);
    if (node?.left) queue.push(node.left);
    if (node?.right) queue.push(node.right);
  }
  console.log("BFS: ", data);
  return data;
}
// (Root > Left > Right)
function preOrderDFS(node: TreeTraversalNode<string>) {
  if (!node) return;
  // visit root first, then recurse left, then recurse right.
  console.log(node.value); // visit the current node (root of current subtree) first
  preOrderDFS(node.left!); // go left
  preOrderDFS(node.right!); // go right
}

// (Left > Root > Right) (ascending order)
function inOrderDFS(node: TreeTraversalNode<string>) {
  if (!node) return;
  // Recurse left first, then visit root, then recurse right.
  inOrderDFS(node.left!);
  console.log(node.value); // visit the current node (root of current subtree) middle
  inOrderDFS(node.right!);
}

// (Left → Right → Root)
function postOrderDFS(node: TreeTraversalNode<string>) {
  if (!node) return;
  // Recurse left and right first, then visit root last.
  postOrderDFS(node.left!);
  postOrderDFS(node.right!);
  console.log(node.value); // visit the current node (root of current subtree) at the end
}

// breadthFirstSearch(root);

console.log("-------------------------");
console.log("PRE-ORDER");
preOrderDFS(root); // A > B > D > E > C

console.log("-------------------------");
console.log("IN-ORDER");
inOrderDFS(root); // D > B > E > A > C

console.log("-------------------------");
console.log("POST-ORDER");
postOrderDFS(root); // D > E > B > C > A
