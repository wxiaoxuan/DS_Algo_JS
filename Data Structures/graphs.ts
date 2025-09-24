// ======================================================
// GRAPHS
// ======================================================

// a graph is a collection of vertices and edges
// - vertices (nodes) : entities like cities, users, computers
// - edges : connections between them (roads, friendships, network links)

// =================================
// Time Complexity
// =================================
// Adjacency List: O(V + E)
// Adjacency Matrix: O(V^2)
// BFS/DFS: O(V + E)
// Dijkstra (with PQ): O((V + E) log V)

// =================================
// Types of Graphs
// =================================
// 1. Directed vs Undirected
//    - Directed: 1 way connection
//    - Undirected: 2 way connections

// 2. Weighted vs Unweighted
//    - Weighted: edges have a cost / weight (eg. distance, time)
//    - Unweighted : does not have cost weight on edges

// 3. Cyclic vs Acyclic
//    - may contain cycles (loops) or not

// 4. Dense vs Sparse
//    - many edges vs few edges

// =================================
// Graphs Representations (To store graphs)
// =================================
// 1. Adjacency List
//    - store list of neighbors for each node
//    - efficient for sparse graphs
//    - Pros: Space efficient O(V + E)
//    - Cons: Lookup slower than matrix
//      eg.
//          0: [1, 2]
//          1: [0]
//          2: [0]

// 2. Adjacency Matrix
//    - is a 2D array (N x N)
//    - efficient for dense graphs
//    - Pros : fast lookup O(1)
//    - Cons : memory heavy O((n^2)
//      eg.
//           0 1 1
//           1 0 0
//           1 0 0

// =================================
// Graph Traversal
// =================================
// visit / update / check each vertex in a graph

// Two key algorithms:
// 1. BFS (Breadth-First Search)
//    - Uses queue.
//    - Visits level by level.
//    - Time: O(V + E).

// 2. DFS (Depth-First Search)
//    - Uses stack (or recursion).
//    - Goes deep before backtracking.
//    - Time: O(V + E).

// Graph Traversal Users :
//  - peer to peer networking
//  - finding closest matches / recommendations
//  - Shortest path problems
//      > AI (shortest path to win the game)
//      > GPS Navigation
//      > solving mazes

// =================================
// Depth-First Search in Graph
// =================================
// - prioritize visiting children of a given node before we visit the siblings OR
//   we deepen the traversal before we widen it

// example #1
//      A
//  /       \
//  B ------ C
//  |        |
//  D ------ E
//   \      /
//       F

// In Adjacency List it will look like this:
// {
//     "A": ["B", "C"],
//     "B": ["A", "D"],
//     "C": ["A", "E"],
//     "D": ["B", "C", "F"],
//     "E": ["C", "D", 'F'],
//     "F": ["D", "E"],
// }

// STEPS:
// 1. Start from A (in alphabetic order)
// 2. Branch down is B and C (Look at B first)
// 3. B (has A and D), look at D (since A has alr been looked)
// 4. D (has B, E, F), look at E (since B has alr been looked + alpha order)
// 5. E (has C, D, F). look at C
// 6. C (has A, E), both are looked, go back to E
// 7. E (has C, D, F). look at F (since C and D has alr been looked)
// 8. F (has D, E). all looked thru.
// 9. Done

// =================================
// Common Algorithms:
// =================================
// Shortest Path
//   - BFS (unweighted)
//   - Dijkstra’s Algorithm
//   - Bellman-Ford
//   - Floyd-Warshall

// Minimum Spanning Tree (MST)
//   - Kruskal’s Algorithm
//   - Prim’s Algorithm

// Cycle Detection
//   - DFS based (directed/undirected)
//   - Union-Find

// Topological Sorting
//   - For DAGs (Kahn’s Algo / DFS)

// Strongly Connected Components (SCC)
//   - Kosaraju’s / Tarjan’s Algorithm

class Graph {
  adjacencyList: Record<string, string[]>; // keys are string, values are arrays of strings

  constructor() {
    this.adjacencyList = {};
  }

  // void is a return type that doesn't return anything useful
  addVertex(vertex: string): void {
    // to avoid duplicated vertexes
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) return;

    console.log("--- REMOVING VERTEX ---");
    // remove all edges pointing to this vertex
    for (const neighbor of Object.keys(this.adjacencyList)) {
      //   console.log("neighbor", neighbor); // output: A, B, C
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter((v) => v !== vertex);
    }

    // remove the vertex itself
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      console.log(`One or both vertices not found`);
      return;
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
  }

  // depth first search (recursive method)
  dfsRecursive(startingNode: string): string[] {
    const order: string[] = [];
    const visited = new Set<string>();

    const dfs = (node: string) => {
      visited.add(node);
      order.push(node);

      // Look at every neighbor of the current node
      // If that neighbor hasn’t been visited yet, keep exploring from that neighbor (DFS)
      // this.adjacencyList[node] -> eg. this.adjacencyList[A] // output: ['B','C']
      // [] : avoids undefined error if node does not exist
      for (const neighbor of this.adjacencyList[node] ?? []) {
        if (!visited.has(neighbor)) dfs(neighbor);
      }
    };

    if (this.adjacencyList[startingNode]) dfs(startingNode);
    return order;
  }

  // depth first search (iterative method)
  dfsIterative(startingNode: string): string[] {
    if (!this.adjacencyList[startingNode]) return [];

    const visitedNodes = new Set<string>();
    const order: string[] = []; // order records the visit sequence (preorder)
    const stack: string[] = [startingNode]; // stack for LIFO behavior; seed with the start node

    while (stack.length) {
      const node = stack.pop()!; // "!" is a non-null assertion: safe because stack.length > 0
      if (visitedNodes.has(node)) continue; // skip duplicated nodes

      visitedNodes.add(node);
      order.push(node);

      // push neighbour in reverse to mimic recursive pre-order (optional)
      const neighbors = this.adjacencyList[node] ?? [];

      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbour = neighbors[i];
        if (!visitedNodes.has(neighbour)) stack.push(neighbour);
      }
    }

    return order;
  }

  bfs(startingNode: string): string[] {
    if (!this.adjacencyList[startingNode]) return [];

    const visited = new Set<string>();
    const order: string[] = [];
    const queue: string[] = [startingNode];

    visited.add(startingNode);

    while (queue.length) {
      const node = queue.shift()!; // remove 1st ele in the queue
      order.push(node);

      for (const neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return order;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("list: ", graph.adjacencyList);
// output:
//      A
//  /       \
//  B ------ C
//  |        |
//  D ------ E
//   \      /
//       F

// graph.removeEdge("A", "B");
// graph.removeEdge("E", "B");
// graph.removeVertex("C");

// console.log("FINAL LIST: ", graph.adjacencyList);
console.log("DFS (recursive):", graph.dfsRecursive("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log("DFS (iterative)", graph.dfsIterative("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log("BFS from A:", graph.bfs("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
