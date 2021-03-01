class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    dfsRecursive(vertex) {
        const result = [],
            visitedVertices = {};

        const dfs = (vertex) => {
            if (!vertex) return null;
            visitedVertices[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(v => {
                if (!visitedVertices[v]) {
                    dfs(v);
                }
            });
        };
        dfs(vertex);

        return result;
    }

    dfsIterative(vertex) {
        const result = [],
            stack = [],
            visitedVertices = {};

        stack.push(vertex);
        visitedVertices[vertex] = true;

        while (stack.length) {
            vertex = stack.pop();
            result.push(vertex);
            this.adjacencyList[vertex].forEach((v) => {
                if (!visitedVertices[v]) {
                    visitedVertices[v] = true;
                    stack.push(v);
                }
            });
        }

        return result;
    }

    bfs(vertex) {
        const result = [],
            queue = [],
            visitedVertices = {};

        queue.push(vertex);
        visitedVertices[vertex] = true;

        while (queue.length) {
            vertex = queue.shift();
            result.push(vertex);
            this.adjacencyList[vertex].forEach((v) => {
                if (!visitedVertices[v]) {
                    visitedVertices[v] = true;
                    queue.push(v);
                }
            });
        }

        return result;
    }
}

export default Graph;
