// ======================================================
// HASH TABLES
// ======================================================

// hash tables are used to store key-value pairs  in a fixed array of 'buckets'

// keys are not ordered
// Think of it like a dictionary: you look up a word (the key), and instantly get its definition (the value).

// =================================
// Time Complexity
// =================================
// insert O(1)
// delete O(1)
// access O(1)

// worst case (all collide): O(n)

// =================================
// How it works
// =================================
// 1. Hash Function
// - A special function converts the key (like "apple") into a number (called a hash code).
// - Example: hash("apple") → 73289

// 2. Indexing
// - The hash code is mapped into an array index (e.g., 73289 % array_size → 5).
// - The key-value pair is stored at that index.

// 3. Retrieval
// - To find a value, the key is run through the same hash function.
// - You jump straight to the right index — O(1) (constant time) on average.

// =================================
// Collisions
// =================================
// Sometimes two different keys hash to the same index.
// Example: hash("apple") % 10 → 5 and hash("banana") % 10 → 5

// ---------------
// Solutions:
// ---------------
// Example:
//  ----------------------------
// | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
//  ----------------------------

// 1. Chaining:
//    - Store multiple items in a linked list or array at that index
//    - In index 4, it has an array of [ ['black', '#000000'], ['white', '#ffffff'] ]

// 2. Linear Probing / Open Addressing:
//    - if index 4 has a value inside, Find the next empty spot in the table

// =================================
// ✅ Pros
// =================================
// - Fast lookups & inserts (average O(1)).
// - Easy key-to-value mapping.
// - Widely used (caches, databases, symbol tables in compilers, etc.)
// - find values very quickly given a key
// - can add new key-values quickly
// - store data in a large array, and work by hashing the key
// - a good hash should be fast, distribute keys uniformly, and be deterministic
// - separate chaining and linear probing are two strategies used to deal w 2 keys that hash to the same index

// =================================
// ❌ Cons
// =================================
// - Collisions slow things down.
// - Needs a good hash function.
// - Can use extra memory.

// =================================
// Hash Tables
// =================================
// - Store (key → value) pairs in a fixed array of “buckets”.
// - A hash function maps a key to a bucket index: index = hash(key) % capacity.
// - If two keys land in the same bucket (collision), we either:
//    > Separate chaining: keep a small list/array in that bucket.
//    > Open addressing: probe to another empty slot in the array.
// - Keep load factor (size / capacity) under a threshold (e.g. 0.75) by resizing to maintain O(1) average operations.

class HashMap<Value> {
  private buckets: Array<Array<[string, Value]>>;
  private _capacity: number;

  constructor(capacity = 8) {
    const cap = Math.max(1, Math.floor(capacity));
    this._capacity = cap;
    this.buckets = Array.from({ length: cap }, () => []);
  }

  // hash the key into a number (simple hash, production code uses a stronger hash)
  private hash(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = h * 31 + key.charCodeAt(i);
    }
    return Math.abs(h) % this._capacity;
  }

  // add new key and values
  set(key: string, value: Value): void {
    const i = this.hash(key);
    const bucket = this.buckets[i];
    const idx = bucket.findIndex(([k]) => k === key);

    console.log("current idx: ", idx);
    if (idx >= 0) {
      bucket[idx][1] = value; // update
    } else {
      bucket.push([key, value]); // insert
    }
  }

  // retrieve key and values
  get(key: string): Value | undefined {
    const i = this.hash(key);
    const bucket = this.buckets[i];
    const pair = bucket.find(([k]) => k === key);

    console.log("RETRIEVED: ", pair?.[1]);
    return pair?.[1];
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: string): boolean {
    const i = this.hash(key);
    const bucket = this.buckets[i];
    const idx = bucket.findIndex(([k]) => k === key);

    if (idx >= 0) {
      bucket.splice(idx, 1);

      console.log("deleting: ", bucket);
      return true;
    }
    return false;
  }

  // Handy for learning/printing
  debugBuckets() {
    // console.log("current bucket: ", this.buckets);
    return this.buckets.map((b) => [...b]);
  }
}

const hashTables = new HashMap();
hashTables.set("apple", 5);
hashTables.set("banana", 7);
hashTables.set("pear", 9);

hashTables.set("banana", 42); // update
console.log("------------------------------------------");
console.log(hashTables.get("banana")); // 42
console.log(hashTables.has("pear")); // true
console.log(hashTables.delete("apple")); // true
console.log(hashTables.get("apple")); // undefined
console.log("------------------------------------------");

console.log(hashTables.debugBuckets()); // See how keys landed into buckets
