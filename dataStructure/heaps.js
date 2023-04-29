//------------------------------------------------------
// BINARY HEAPS
//------------------------------------------------------
// - used to implement Priority Queues
// - sometimes used w graph traversal algo
// - not that ideal to use for searching
// - useful for Sorting & Priority Queues

// Left Child - 2n + 1
// Right Child - 2n + 2
// Parent - Math.floor((n-1)/2)

// BIG O
// - Insertion - O(log n)
// - Removal - O(log n)
// - Search - O(n)

//------------------------------------------------------
// in MaxBinaryHeap
//------------------------------------------------------
// - parent nodes are always Larger than child nodes

//------------------------------------------------------
// PSEUDOCODE
//------------------------------------------------------
// - each parent has at most 2 child nodes
// - val of each parent node is always greater than child nodes
// - parent is always greater than children, but no guarantees btw sibling nodes
// - all children of each node are as full as they can be & LEFT children r filled out first

//------------------------------------------------------
// in MinBinaryHeap
//------------------------------------------------------
// - parent nodes are always Smaller than child nodes

//------------------------------------------------------
// PSEUDOCODE (INSERT)
//------------------------------------------------------
// 1. push value into values property on the heap
// 2. bubble up
//    => create var called index : is the length of values property - 1
//    => create var called parentIndex : which is the floor of (index - 1)/2
//    => keep looping if values element at parentIndex is less (<) than values element at childIndex
//          - swap value of values element at parentIndex w value of element property at childIndex
//          - set index to be parentIndex & start over!

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1; // keep track of the new item inserted
    const element = this.values[index]; // store the values of the elements

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // Remove
  extractMax() {
    const max = this.values[0]; // take the 1st element in the list
    const end = this.values.pop(); // remove the last element in the list

    // take the last element (end) and replace w the max
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  //  0  1
  // [33,39,41,18,27,12]
  sinkDown() {
    let index = 0;
    // find the children
    const length = this.values.length;
    const firstElement = this.values[0]; // first element

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let leftChild, rightChild;
      let swap = null;

      // to make sure the index is not out of bound
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        // compare leftChild with 1st element (firstElement)
        if (leftChild > firstElement) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // if leftChild is larger than index 0 but rightChild is larger than leftChild
        if (
          (swap === null && rightChild > firstElement) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = firstElement;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

//------------------------------------------------------
// PRIORITY QUEUE
//------------------------------------------------------
// - a data structure whr each element has a priority
// - elements w higher priority r served before elements w lower priorities
// - can implement w an array or list

//------------------------------------------------------
// PSEUDOCODE (INSERT)
//------------------------------------------------------
// 1. write a min. binary heap (lower no. means higher priority)
// 2. each node has a value and a priority. use the priority to build the heap
// 3. Enqueue method - accepts value & priority, makes a new node & put it in the right spot based off of its priority
// 4. Dequeue method - removes root element, returns it & rearrange heap using priority

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority; // compare based off priority
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
