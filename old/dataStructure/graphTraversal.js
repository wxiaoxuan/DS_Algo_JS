// ===========================================================
// GRAPH TRAVERSAL
// ===========================================================

// - visit / update / check each vertex in a graph 

// Used for:
// - peer to peer networking
// - finding 'Closest' matches / distance 
// - shortest path problems (gps / maze / AI game)

// ============================================================
// PSEUDOCODE - (DFS RECURSIVE)
// ============================================================
// 1. this function accepts a starting node
// 2. create a list to store end result, to be returned at the v end
// 3. create an object to store visited vertices
// 4. create a helper function which accepts a vertex 
//    -> return early if vertex is empty 
//    -> place vertex it accepts into the visited object & push that vertex into the result array
//    -> loop thru all values in the adjacencyList for that vertex 
//    -> if any of those values have not been visited, recursively invoke the helper function w that vertex 
// 5. invoke helper function w the starting vertex 
// 6. return result array 


// ============================================================
// PSEUDOCODE (DFS ITERATIVE)
// ============================================================
// 1. this function accepts a starting node
// 2. create a stack to help keep track of vertices (use a list / array)
// 3. create a list to store the end result, to be returned at the very end
// 4. create an object to store the visited vertices 
// 5. add the starting vertex to the stack, & mark it visited 
// 6. while the stack has smth in it, 
//    -> pop the next vertex from the stack
//    -> if vertex has not been visited yet, 
//        -> mark it as visited
//        -> add it to result list 
//        -> push all its neighbors into the stack 

// ============================================================
// PSEUDOCODE (BFS)
// ============================================================
// 1. this function accepts a starting vertex
// 2. create a queue (or array) & place the starting vertex in it
// 3. create an array to store the nodes visited 
// 4. create an object to store the nodes visited 
// 5. mark the starting vertex as visited
// 6. loop as long as thr is anyth in the queue
// 7. remove 1st vertex from the queue & push it into the array that stores the nodes visited 
// 8. loop over each vertex in the adjacency list for the vertex u r visiting
// 9. if it is not inside the object that stores the nodes visited, mark it as visited & enqueue that vertex
// 10. once finish looping, return the array of visited nodes 

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        }
        dfs(start);

        return result;
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift(); // remove 1st element from the array
            result.push(currentVertex); // store the element into the result 
           
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]

