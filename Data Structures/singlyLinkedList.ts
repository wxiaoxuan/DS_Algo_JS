// ======================================================
// SINGLY LINKED LIST
// ======================================================

// A way to store a collection of items (like numbers or words) where each item points to the next one, forming a chain.

// Think of it like:
// - Each box stores data and a pointer (address of the next box).
// - The boxes are linked together, instead of being in one continuous row like an array.

// ------------------------------------------------------------------------------------
// Array vs Linked List
// ------------------------------------------------------------------------------------
// Array	                                 Linked List
// ------------------------------------------------------------------------------------
// Stored in continuous memory	             Stored in scattered memory
// Access is fast by index: arr[3] (O(1))    Must move through nodes one by one to find
//                                           something (O(n))
// Fixed size (need resizing if full)	       Flexible size (easy to grow/shrink)

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Insertion
// - At Head: O(1)
//      -> just create a new node and point to old head
// - At Tail:
//      -> O(1) : if tail pointer is tracked (constant time)
//      -> O(n) : if not tracked (must traverse to end)
// - In Middle: O(n)
//      -> need to traverse to position first. adjusting pointers is O(1)

// Delete
// - At Head: O(1)
//      -> just move head pointer to next node
// - At Tail: O(n)
//      -> need to find the node before tail
// - In Middle: O(n)
//      -> must find the node before the one you want to remove

// Traversal - O(n)
//    -> visit all nodes. standard iteration

// Searching - O(n) Worst || O(1) Best
//    -> if its head, its instant. else, worst case is scanning whole list

// Access - O(n)
//    -> must traverse whole node by node, no direct indexing

// -------------------------------
// ===== Space Complexity =====
// -------------------------------
// O(1)

// -------------------------------
// Example of a Linked List
// -------------------------------
// Say we store 10 → 20 → 30 → null
// First node stores 10 and points to the next node.
// Second node stores 20 and points to the next.
// Last node stores 30 and points to null (end of list).

// -------------------------------
// Common Operations
// -------------------------------
// - Insert at head (add in front) – O(1)
// - Insert at tail (add at end) – O(n) unless you track the tail
// - Delete a node – O(n) (must search first)
// - Search for a value – O(n)
// - Traverse (go through all elements) – O(n)

// -------------------------------
// Key Insights
// -------------------------------
// Fast at the ends: inserting/removing at the head is always O(1).
// Slow for random access: you can’t jump directly like an array.
// Middle operations depend on traversal: O(n) to find the right spot, then O(1) to adjust pointers.

// -------------------------------
// TL;DR:
// -------------------------------
// Good for: stacks, queues, dynamic lists with frequent head/tail changes.
// Bad for: random access or heavy searching.

// -------------------------------
// Structure of a Node
// -------------------------------
// Each element (called a node) has:
class NodeStructure {
  value: number | string;
  next: NodeStructure | null;

  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  length: number;
  head: NodeStructure | null;
  tail: NodeStructure | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // ADD new node to END of list
  push(value: number | string) {
    console.log("------ PUSHING ------");
    let newNode = new NodeStructure(value); // create new element

    // if initial list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode; // add node to end of list
      this.tail = newNode; // set tail to the latest node
    }
    this.length++;
    return this;
  }

  // REMOVE a node from END of list
  pop() {
    if (this.length === 0) return undefined;
    console.log("------ POPPING ------");
    //   1         2         3
    // current
    // newTail

    let current = this.head;
    let newTail = current;

    // check if still have other nodes in the list
    while (current?.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail!.next = null;
    this.length--;

    // to prevent hitting negative numbers
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // REMOVE a node from START of list
  shift() {
    if (this.length === 0) return undefined;
    console.log("------ SHIFT ------");

    let currentHead = this.head;
    this.head = this.head!.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // ADD a node to the START of list
  unshift(value: number | string) {
    let newNode = new NodeStructure(value); // create new element

    // if initial list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; // to show the current head's position before new node is added
      this.head = newNode; // update the new head to the new node
    }

    this.length++;
    return this;
  }

  // RETRIEVE a node by its position in the list
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    console.log("------ GET ------");

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    console.log("RETRIEVING => ", current);
    return current;
  }

  // UPDATE the value of a node based on its position in the list
  set(value: number | string, index: number) {
    console.log("------ SET ------");
    let foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.value = value;
    console.log("updated: ", foundNode.value);
    return true;
  }

  // ADD a node to the list at a SPECIFIC position
  insert(value: number | string, index: number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value); // end of list
    if (index === 0) return this.unshift(value); // start of list

    // if new node is in the middle of the list
    let newNode = new NodeStructure(value); // create new element
    let nodeBeforeNewNode = this.get(index - 1);
    let tempOfNextNode = nodeBeforeNewNode!.next; // save the next node in a variable before being replaced
    nodeBeforeNewNode!.next = newNode;
    newNode.next = tempOfNextNode;

    this.length++;
    return true;
  }

  // REMOVE a node on the list at a SPECIFIC position
  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let previousNode = this.get(index - 1); // the node before index
    let removed = previousNode!.next;
    previousNode!.next = removed!.next;
    this.length--;

    return removed;
  }

  // reverse the list in place
  reverse() {
    let currentNode = this.head;

    // 1. swap head and tail
    this.head = this.tail;
    this.tail = currentNode;

    // 2. walk through the list and reverse pointers
    let nextNode;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode!.next; // store reference to the next node
      currentNode!.next = prevNode; // reverse the pointer

      // move forward in the list
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
// console.log("initial list: ", list);
console.log("------------------------------------------");
list.push("1");
list.push("2");
list.push("3");
list.push("4");
console.log("updated list: ", list);
console.log("------------------------------------------");
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// console.log("final list: ", list);

// list.unshift("0");
// list.unshift("000");
// list.get(1);
// list.set("bee", 0);
// list.insert("bee", 1);
// list.remove(2);
// console.log("------------------------------------------");
list.reverse();
console.log("final list: ", list);
console.log("------------------------------------------");
