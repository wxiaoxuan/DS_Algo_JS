// ===========================================================
// DIJKSTRA'S ALGORITHM
// ===========================================================

// find the shortest path btw 2 vertices on a graph
// using priority queue

// Useful for : GPS, Airline Tickets, Network Routing etc.

// APPROACH
// 1. pick the node w the shortest distance first
// 2. look at the node's neighbors
// 3. calculate the distance by summing the total edges that lead from the starting node to the new node
// 4. if the new total distance to a node is lesser than the previous total, store the new shorter distance for that node

// PSEUDOCODE
// 1. this function accept a starting & ending vertex
// 2. create object (distance) & set each key to be every vertex in the adjacency list w infinity value,
//    except for the starting vertex which shld have a value of 0
// 3. after setting a value in the distances object, add each vertex w a priority of Infinity to the priority queue,
//    except the starting vertex, which shld have a priority of 0 (bc its whr we begin)
// 4. create another object called previous & set each key to be every vertex in the adjacency list w a value of null
// 5. start looping as long as thr is anyth in the priority queue
//    -> dequeue vertex from priority queue
//    -> if vertex same as ending vertex, we r DONE!
//    -> otherwise, loop thru each value in the list at that vertex
//       -> calc dist from starting vertex to that vertex
//       -> if distance less than what is currently stored in our distances object
//            -> update distance object w new lower distance
//            -> update prev object to contain that vertex
//            -> enqueue the vertex w the total distance from the start node

// ==================================================================================================

// Naive priority queue 
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift(); // remove 1st element from list
  }
  // BIG O - O(n * log(n))  [not ideal]
  sort() {
    this.values.sort((a, b) => a.priority - b.priority); // sort based on the priority
  }
}

// Optimized Priority Queue
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let queue = new PriorityQueue();
queue.enqueue("B", 3);

// ==================================================================================================

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      //WE ARE DONE
      if (smallest === finish) {
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor]; //find neighboring node
          let candidate = distances[smallest] + nextNode.weight; //calculate new distance to neighboring node
          let nextNeighbor = nextNode.node;
          
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate; //updating new smallest distance to neighbor
            previous[nextNeighbor] = smallest; //updating previous - How we got to neighbor
            nodes.enqueue(nextNeighbor, candidate); //enqueue in priority queue with new priority
          }
        }
      }
    }
    return path.concat(smallest).reverse(); // output: ["A", "C", "D", "F", "E"]
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E"); // OUTPUT SHORTEST DISTANCE FROM PATH A TO E 

//    / A \
//   /     \--B \
// C ---         \
//  \   \- D --   \
//   \      \  \-- E
//    \----- F --/
