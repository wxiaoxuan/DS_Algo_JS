// ======================================================
// DIJKSTRA ALGORITHM
// ======================================================

// - Find the shortest path from a start node to every other node in a weighted graph with non-negative edges.

// > When to use: Road networks, routing, any weighted graph with w ≥ 0.
//  > When not to use: If any edge can be negative → use Bellman–Ford (or reweight).

// =================================
// Time Complexity
// =================================
// With priority queue = O((V + E) log V)
// Without priority queue (naive) = O(V²)

// =================================
// The Approach
// =================================
// 1. when visiting a new node, pick the node with the smallest distance (eg. B) to visit first
// 2. look at B's neighbors
// 3. calculate the distance by adding the total edges that lead to the node we r checking from the starting node
// 4. store the new shorter distance for that node IF the new total distance to a node is less than the previous total

type Priority = { node: string; priority: number };

// simple priority queue (brute force approach)
class WeightPriorityQueue {
  values: Priority[];

  constructor() {
    this.values = [];
  }
  enqueue(node: string, priority: number) {
    this.values.push({ node, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

type Edge = { node: string; weight: number };
type WeightedAdjacencyList = Record<string, Edge[]>;

class WeightedGraph {
  adjacencyList: WeightedAdjacencyList;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight }); // undirected
  }
  // find the shortest path
  dijkstra(startPoint: string, endPoint: string) {
    const priorityQueue = new WeightPriorityQueue();
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    const path: string[] = [];

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === startPoint) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null; // output: { A: null, B: null, C: null, D: null, E: null, F: null }
    }

    // as long as there is something to visit
    while (priorityQueue.values.length !== 0) {
      let smallestNode = priorityQueue.dequeue()!.node; // remove first ele in the queue

      if (!smallestNode) break;

      if (smallestNode === endPoint) {
        console.log("------------------------------------------");
        console.log("--- Reach my destination!! ---");
        let current: string | null = endPoint;
        while (current) {
          path.push(current);
          current = previous[current];
        }
        return path.reverse(); // found shortest path
      }

      // start point
      if (distances[smallestNode] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallestNode]) {
          console.log("priorityQueue", priorityQueue);

          let candidate = distances[smallestNode] + neighbor.weight;
          console.log("------------------------------------------");
          console.log("Current Node: ", smallestNode);
          console.log("current shortest distance: ", distances[smallestNode], " neighbor: ", neighbor);
          console.log("candidate: ", candidate, "distances[neighbor.node]: ", distances[neighbor.node]);

          // calculate new distance to neighbor node
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            console.log("------------------------------------------");
            console.log("current previous: ", previous[neighbor.node]);
            previous[neighbor.node] = smallestNode;
            console.log("after previous: ", previous[neighbor.node]);
            priorityQueue.enqueue(neighbor.node, candidate);
          }
        }
      }
    }
    return path;
  }
}

const weightedGraph = new WeightedGraph();

weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");

weightedGraph.addEdge("A", "B", 4);
weightedGraph.addEdge("A", "C", 2);
weightedGraph.addEdge("B", "E", 3);
weightedGraph.addEdge("C", "D", 2);
weightedGraph.addEdge("C", "F", 4);
weightedGraph.addEdge("D", "E", 3);
weightedGraph.addEdge("D", "F", 1);
weightedGraph.addEdge("E", "F", 1);

// console.log("graph: ", weightedGraph.adjacencyList);
// output:

//          4
//      A ----- B --
//  2 /              \ 3
//   /   2        3   \
//  C ------ D -------- E
//  \         \        /
//   \       1 \      / 1
//    --------- F ----
//       4

console.log("SHORTEST PATH FROM A TO E: ", weightedGraph.dijkstra("A", "E")); // [ 'A', 'C', 'D', 'F', 'E' ]
