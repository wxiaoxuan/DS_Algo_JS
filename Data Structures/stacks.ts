// ======================================================
// STACKS
// ======================================================

// a LIFO data structure (last in first out)

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
// - undo / redo
// - routing (history object)

class StackNode {
  value: number | string;
  next: StackNode | null;

  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  latest: StackNode | null;
  oldest: StackNode | null;
  length: number;

  constructor() {
    this.latest = null;
    this.oldest = null;
    this.length = 0;
  }

  push(value: number | string) {
    const newNode = new StackNode(value);

    if (this.length === 0) {
      this.latest = newNode;
      this.oldest = newNode;
    }

    let prevNode = this.latest;
    this.latest = newNode;
    this.latest.next = prevNode;

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    let latestNode = this.latest;

    if (this.length === 1) {
      this.latest = null;
      this.oldest = null;
    } else {
      this.latest = this.latest!.next;
    }

    this.length--;
    console.log("POPPING", latestNode);
    return latestNode!.value;
  }
}

let stack = new Stack();
stack.push("0");
stack.push("1");
stack.push("2");
stack.push("3");
console.log("stack", stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log("------------------------------------------");
console.log(stack);
