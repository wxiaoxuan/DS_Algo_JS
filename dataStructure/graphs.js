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