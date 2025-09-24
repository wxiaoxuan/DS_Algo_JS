// SINGLY LINKED LIST
// consists of Head, Tail, & Length property
// consists of Nodes (each node has a value & pointer to another node or null)

// BIG O
// - insertion - O(1)
// - removal - O(1) or O(N)
// - Search - O(N)
// - Access - O(N)

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Insert new node into end of linked list
    push(val) {
      let newNode = new Node(val); // create new node using value passed to the function
  
      // if its a new node (new linked list)
      if (this.length === 0) {
        this.head = newNode;
        this.tail = this.head;
      } // add new node to be the last tail
      else {
        this.tail.next = newNode;
        this.tail = newNode; // set new node as the tail
      }
      this.length++; // increment length by 1
      return this;
    }
  
    // Remove node from end of linked list
    pop() {
      if (this.length === 0) return undefined;
      let current = this.head;
      let newTail = current;
  
      // Hi -> Mr bean -> Bye
      //         nt        c
  
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null; // severe the arrow if reach end of array
      this.length--;
      return current;
    }
  
    // Remove node from Beginning of linked list
    shift() {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return currentHead;
    }
  
    // Add new node to Beginning of Linked List
    unshift() {}
  
    // Retrieve node by its position in linked list
    get() {}
  
    // change the value of a node based on its position in linked list
    set() {}
  
    // add note to a specific position in linked list
    insert() {}
  
    // remove node at a specific position in linked list
    remove() {}
  
    // reverse linked list in place
    reverse() {}
  }
  
  let list = new SinglyLinkedList();
  list.push("Hello");
  list.push("Mr bean");
  list.push("Goodbye");
  // console.log("list => ", list)
  
  list.pop("Goodbye");
  console.log("popping => ", list);
  
  list.shift("Hello");