/**
 * Describes an undirected unweighted Graph
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * Adds vertex
     * @param vertex 
     */
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    /**
     * Removes vertex and all related edges 
     * @param vertex 
     */
    removeVertex(vertex) {
        
    }

    /**
     * Adds an edge between vertex1 & vertex2
     * @param vertex1 
     * @param vertex2 
     */
    addEdge(vertex1, vertex2) {
        
    }

    /**
     * Removes an edge between vertex1 & vertex2
     * @param vertex1 
     * @param vertex2 
     */
    removeEdge(vertex1, vertex2) {
        
    }

    /**
     * Performs recursive DFS starting at a given vertex
     * @param vertex 
     */
    dfsRecursive(vertex) {
        const result = [];

        return result;
    }

    /**
     * Performs iterative DFS starting at a given vertex
     * @param vertex 
     */
    dfsIterative(vertex) {
        const result = [];

        return result;
    }

    /**
     * Performs BFS starting at a given vertex
     * @param vertex 
     */
    bfs(vertex) {
        
    }
}

export default Graph;
