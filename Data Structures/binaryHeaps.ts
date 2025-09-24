// ======================================================
// BINARY HEAPS
// ======================================================

// it is a special type of binary tree that is:
// - Complete Binary Tree
//   > every level is completely filled except possibly the last, & nodes are as far left as possible

// - Heap Property
//   > in a Max Heap, every parent node is Greater than or equal to its children
//   > in a Min Heap, every parent node is Less than or equal to its children

// bc of these 2 rules (max and min heap), binary heaps are often stored in Arrays instead of actual tree nodes

// =================================
// Example
// =================================

// ---------
// MAX HEAP
// ---------
// array: [50, 30, 40, 10, 20, 35, 25]

//         50
//     /        \
//    30          40
//   /   \       /   \
// 10    20    35    25

// ---------
// MIN HEAP
// ---------
// array: [10, 20, 15, 30, 40]

//        10
//     /      \
//    20       15
//  /    \
// 30     40

// =================================
// Array Representation (0-based index)
// =================================
// If a node is at index i:
// - Left child → 2i + 1
// - Right child → 2i + 2
// - Parent → Math.floor((i - 1) / 2)

// =================================
// Common Uses
// =================================
// - Priority Queues : heaps are the standard implementation
// - Heap Sort : uses repeated extraction from a heap
// - Graph Algorithms : Dijikstra, Prim's MST use heaps for efficiency

// =================================
// Time Complexity
// =================================
// insertion - O(log n)
// removal - O(log n)
// search - O(n)

class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // insert element
  insert(element: number) {
    this.values.push(element);
    this.bubbleUp();
    return this;
  }

  // sort the new element accordingly to the tree (bottom to up)
  private bubbleUp() {
    let elementIndex = this.values.length - 1;
    let element = this.values[elementIndex];

    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break; // dunnid swap

      console.log("SWAPPING", "parent", parent, "element: ", element);
      // swap if current element is bigger than parent element
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex; // move up

      console.log("AFTER SWAP:", "parent", parent, "element", element);
    }
  }

  // remove root and restoring the values accordingly
  extractMax() {
    if (this.values.length === 0) return undefined;

    const max = this.values[0]; // root
    const lastElement = this.values.pop();

    // move last element to root and sink it down
    this.values[0] = lastElement!;
    this.sinkDown();

    console.log("max", max);
    return max;
  }

  // restoring the values accordingly (up to bottom)
  private sinkDown() {
    let index = 0;
    const length = this.values.length;
    const root = this.values[0];

    while (true) {
      const leftIndex = 2 * index + 1; // 2n + 1
      const rightIndex = 2 * index + 2; // 2n + 2
      let swapIndex: number | null = null;

      console.log("left index: ", leftIndex, "rightIndex: ", rightIndex, "length: ", length);

      if (leftIndex < length) {
        const left = this.values[leftIndex];
        // if left child element is bigger than root
        if (left > root) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        const right = this.values[rightIndex];

        // 2 conditions to check:
        // 1. if leftIndex has not been swapped and right node is bigger than root
        // 2. if leftIndex has been swapped and right node is larger than left element
        if ((swapIndex === null && right > root) || (swapIndex !== null && right > this.values[swapIndex])) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;

      //swap with larger child
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = root;
      index = swapIndex; // move down and compare again
    }
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(55);
// console.log("INITIAL: ", maxBinaryHeap.values);
// console.log("------------------------------------------");
// maxBinaryHeap.extractMax(); // [39, 27, 33, 18, 12]
// console.log("------------------------------------------");
// console.log("FINAL", maxBinaryHeap.values);

// INITIAL

//       41
//    /      \
//   39       33
//  /  \      /
// 18  27    12

// EXTRACT MAX

//       39
//    /      \
//   27       33
//  /  \
// 18  12

// =================================
// PRIORITY QUEUE
// =================================
// - a data structure where each element has a priority.
// - elements with higher priorities are served BEFORE lower priorities

class BinaryHeapsNode {
  value: string;
  priority: number;

  constructor(value: string, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  values: BinaryHeapsNode[];

  constructor() {
    this.values = [];
  }

  // add new node and sort based off priority level
  enqueue(value: string, priority: number) {
    let newNode = new BinaryHeapsNode(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  private bubbleUp() {
    let elementIndex = this.values.length - 1;
    let element = this.values[elementIndex];

    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority <= parent.priority) break; // dunnid swap

      // console.log("SWAPPING", "parent", parent, "element: ", element);
      // swap if current element is bigger than parent element
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex; // move up

      // console.log("AFTER SWAP:", "parent", parent, "element", element);
    }
  }

  // remove based on highest priority and rearrange the heap using priority
  dequeue() {
    if (this.values.length === 0) return undefined;

    const max = this.values[0]; // root
    const lastElement = this.values.pop();

    // move last element to root and sink it down
    this.values[0] = lastElement!;
    this.sinkDown();

    console.log("REMOVING: ", max);
    return max;
  }

  // restoring the values accordingly (up to bottom)
  private sinkDown() {
    let index = 0;
    const length = this.values.length;
    const root = this.values[0];

    while (true) {
      const leftIndex = 2 * index + 1; // 2n + 1
      const rightIndex = 2 * index + 2; // 2n + 2
      let swapIndex: number | null = null;

      if (leftIndex < length) {
        const left = this.values[leftIndex];
        // if left child element is bigger than root
        if (left.priority > root.priority) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        const right = this.values[rightIndex];

        // 2 conditions to check:
        // 1. if leftIndex has not been swapped and right node is bigger than root
        // 2. if leftIndex has been swapped and right node is larger than left element
        if ((swapIndex === null && right.priority > root.priority) || (swapIndex !== null && right.priority > this.values[swapIndex].priority)) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;

      //swap with larger child
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = root;
      index = swapIndex; // move down and compare again
    }
  }
}

// 1 (lowest priority) > 5 (highest priority)
let hospital = new PriorityQueue();
hospital.enqueue("common cold", 1);
hospital.enqueue("bloody", 5);
hospital.enqueue("high fever", 2);

console.log("INITIAL", hospital.values);

hospital.dequeue(); // bloody 5 removed
hospital.dequeue(); // high fever 2 removed
hospital.dequeue(); // cold 1 removed
