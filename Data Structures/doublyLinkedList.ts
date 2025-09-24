// ======================================================
// DOUBLY LINKED LIST
// ======================================================

// each node points to both next and previous

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// Insertion
// - At Head: O(1)
//      -> just create a new node and point to old head

// - At Tail:
//      -> O(1) : if tail pointer is tracked (constant time)

// - In Middle: O(n)
//      -> need to traverse to position first. adjusting pointers is O(1)

// Delete
// - At Head: O(1)
//      -> just move head pointer to next node and fix prev node 

// - At Tail: O(1)
//      -> with tail pointer 

// - In Middle: O(1)
//      -> immediate pointer rewiring

// Traversal (forward / backward) - O(n)
//    -> can traverse both ways

// Searching - O(n) Worst || O(1) Best
//    -> if its head/tail, its instant. else, worst case is scanning whole list

// Access - O(n)
//    -> must traverse node by node, can start from head or tail


// -------------------------------
// Structure of a Node
// -------------------------------
// Each element (called a node) has:
class NodeStructureDLL {
  value: number | string;
  next: NodeStructureDLL | null;
  prev: NodeStructureDLL | null;

  constructor(value: number | string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  head: NodeStructureDLL | null;
  tail: NodeStructureDLL | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ADD new node to END of list
  push(value: number | string) {
    let newNode = new NodeStructureDLL(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode; // add new node to current tail
      newNode.prev = this.tail; // set new node's prev to the current tail
      this.tail = newNode; // set new node to become new tail
    }

    this.length++;
    return this;
  }

  // REMOVE a node from END of list
  pop() {
    if (this.length === 0) return undefined;

    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode!.prev;
      this.tail!.next = null;
      removedNode!.prev = null;
    }

    this.length--;
    return removedNode;
  }

  // REMOVE a node from START of list
  shift() {
    if (this.length === 0) return undefined; // nth to remove

    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode!.next;
      this.head!.prev = null;
      removedNode!.next = null;
    }

    this.length--;
    return removedNode;
  }

  // ADD a node to the START of list
  unshift(value: number | string) {
    let newNode = new NodeStructureDLL(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // RETRIEVE a node by its position in the list
  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    const mid = Math.floor(this.length / 2);
    let current, counter;

    // if index is nearer to start of list
    if (index <= mid) {
      console.log("FROM HEAD");

      current = this.head;
      counter = 0;

      while (counter !== index) {
        current = current!.next;
        counter++;
      }
    } else {
      // if index is nearer to end of list
      console.log("FROM TAIL");
      current = this.tail;
      counter = this.length - 1;

      while (counter !== index) {
        current = current!.prev;
        counter--;
      }
    }
    console.log("RETRIEVED VALUE: ", current);
    return current;
  }

  // UPDATE the value of a node based on its position in the list
  set(value: number | string, index: number) {
    const getValue = this.get(index);
    if (!getValue) return false;

    getValue!.value = value;
    console.log("updated value: ", getValue!.value);

    return true;
  }

  // ADD a node to the list at a SPECIFIC position
  insert(value: number | string, index: number) {
    if (index < 0 || index > this.length) return false;
    console.log("index: ", index, this.length);

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new NodeStructureDLL(value);
    let previousNode = this.get(index - 1);
    let afterNode = previousNode!.next;

    previousNode!.next = newNode;
    newNode!.next = afterNode;
    newNode!.prev = previousNode!;
    afterNode!.prev = newNode;

    this.length++;
    return true;
  }

  // REMOVE a node on the list at a SPECIFIC position
  remove(index: number) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode!.prev;
    let afterNode = removedNode!.next;

    beforeNode!.next = afterNode;
    afterNode!.prev = beforeNode;

    removedNode!.next = null;
    removedNode!.prev = null;

    this.length--;
    return removedNode;
  }

  // reverse the list in place
  reverse() {}
}

let doublyLinkedList = new DoubleLinkedList();

doublyLinkedList.push("0");
doublyLinkedList.push("1");
doublyLinkedList.push("2");
// doublyLinkedList.push("3");
// doublyLinkedList.push("4");
// doublyLinkedList.push("5");
// doublyLinkedList.push("6");
// doublyLinkedList.push("7");

console.log("initial list", doublyLinkedList);
console.log("------------------------------------------");
// doublyLinkedList.pop();
// doublyLinkedList.shift();
// doublyLinkedList.unshift("0");
// doublyLinkedList.get(1);
// doublyLinkedList.set("hi", 2);
doublyLinkedList.insert("hello", 2);
console.log("------------------------------------------");
console.log("updated list", doublyLinkedList);
