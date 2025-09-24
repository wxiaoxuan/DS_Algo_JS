// ======================================================
// QUEUES
// ======================================================

// a FIFO data structure (first in, first out)

// -------------------------------
//  ===== Time Complexity =====
// -------------------------------
// insertion - O(1)
// removal - O(1)

// -- not prioritize --
// search - O(n)
// access - O(n)

// -------------------------------
// when is it used?
// -------------------------------
// - background tasks
// - uploading resources

// QUEUE
// push new node to the end
// pop node from the start

// STACK
// push new node from the start
// pop node from the start

//   1    3    4    5    6
// first               last

class QueueNode {
  value: number | string;
  next: QueueNode | null;

  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // add new node
  enqueue(value: number | string) {
    const newNode = new QueueNode(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  // remove node
  dequeue() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      this.last = null;
    }

    let temp = this.first;
    this.first = this.first!.next;
    this.length--;

    return temp;
  }
}

let queue = new Queue();
queue.enqueue("0");
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");

console.log("queue", queue);

queue.dequeue(); // remove 0
console.log("------------------------------------------");
console.log("queue", queue);
queue.dequeue(); // remove 1
console.log("------------------------------------------");
console.log("queue", queue);
