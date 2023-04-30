// ===========================================================
// GRAPHS
// ===========================================================
// - consists of nodes w unordered pairs of vertices for Undirected Graphs OR ordered pairs for Directed Graphs
// - Nodes + connections

// Used for:
// - Social Network
// - Location / Mapping
// - Routing Algo
// - File System Optimization

// GRAPHS TERMS
// - Vertex (nodes)
// - Edge (connections)

// Directed Graph : represented w Arrows (directions)
// Undirected Graph : represented w lines (edge): 2 way connection
// Weighted Graph : assign a value to the edges

// Adjacency Matrix - To Store Graphs
// - a 2D structure, usually implemented w nested arrays (not always)
// - to store info in rows & columns

// ===========================================================
// BIG O (Adjacency Matrix vs Adjacency List)
// ===========================================================
// |V| - no. of vertices
// |E| - no. of edges

// ------------------------------------------------------------
// OPERATION         ADJACENCY LIST         ADJACENCY MATRIX
// ------------------------------------------------------------
// Add Vertex        O(1)                   O(|V^2|)
// Add Edge          O(1)                   O(1)
// Remove Vertex     O(|V| + |E|)           O(|V^2|)
// Remove Edge       O(|E|)                 O(1)
// Query             O(|V| + |E|)           O(1)
// Storage           O(|V| + |E|)           O(|V^2|)
// ------------------------------------------------------------

// Adjacency Matrix
// -------------------
// - takes up more space (in sparse graphs)
// - slower to iterate over all edges
// - faster to lookup specific edge

// Adjacency List
// -------------------
// - take up less space (in sparse graphs)
// - faster to iterate over all edges
// - slower to lookup specific edge

// ============================================================
// PSEUDOCODE
// ============================================================

// -----------------------
// Add Vertex
// -----------------------
// 1. write a method which accepts a name of a vertex (addVertex)
// 2. add a key to the adjacency list w the vertex name & set its value to empty array

// -----------------------
// Remove Vertex
// -----------------------
// 1. this function accept a vertex to remove 
// 2. loop as long as thr r any other vertices in the adjacency list for that vertex 
// 3. inside the loop, call removeEdge function w the vertex we r removing & any values in the adjacency list for that vertex 
// 4. delete the key in the adjacency list for that vertex 

// -----------------------
// Add Edge
// -----------------------
// 1. this function shld accept 2 vertices
// 2. the function shld find the key of vertex1 in the adjacency list & push vertex2 to the array
// 3. the function shld find the key of vertex2 in the adjacency list & push vertex1 to the array
// 4. no handling exception for now

// -----------------------
// Remove Edge
// -----------------------
// 1. this function accepts 2 vertices 
// 2. reassign the key of vertex1 to be an array that does not contain vertex2
// 3. reassign the key of vertex2 to be an array that does not contain vertex1
// 4. no handling exception for now

// Building Undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2) // keep everything that is not in vertex2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2) // keep everything that is not in vertex1
  }

  // Tokyo: ["Hong Kong", "Singapore", "Malaysia"]
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length ) {
        const adjacentVertex = this.adjacencyList[vertex].pop(); // remove the vertex of "Tokyo"
        this.removeEdge(vertex, adjacentVertex) // remove edges that relates to the selected vertex 
    }
    delete this.adjacencyList[vertex]; // delete the entire vertex as the vertex still remains w an empty array. eg. Singapore: []
  }
}

let graph = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
