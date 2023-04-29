//------------------------------------------------------
// STACKS
//------------------------------------------------------
// - LIFO (Last In First Out)

// Commonly used in:
// - managing function / undo or redo / routing

// BIG O
// - insertion - O(1)
// - removal - O(1)
// - searching - O(n)
// - access - O(n)

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    push(val) {
      var newNode = new Node(val);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        var temp = this.first;
        this.first = newNode;
        this.first.next = temp;
      }
      return ++this.size;
    }
    pop() {
      if (!this.first) return null;
      var temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
  }
  
  //------------------------------------------------------
  // QUEUES
  //------------------------------------------------------
  // - FIFO (First In First Out)
  
  // Commonly used in:
  // - background tasks
  // - upload resources
  // - printing / task processing
  
  // BIG O
  // - insertion - O(1)
  // - removal - O(1)
  // - searching - O(n)
  // - access - O(n)
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    enqueue(val) {
      var newNode = new Node(val);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      return ++this.size;
    }
  
    dequeue() {
      if (!this.first) return null;
  
      var temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
  }
  
  