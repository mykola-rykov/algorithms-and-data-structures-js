import MinPriorityQueue from '../07-priority-queue/min-priority-queue';

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ name: vertex2, weight });
        this.adjacencyList[vertex2].push({ name: vertex1, weight });
    }

    Dijkstra(vertex1, vertex2) {
        const distances = {},
            queue = new MinPriorityQueue(),
            previous = {};

        for (let vertexName in this.adjacencyList) {
            if (vertexName === vertex1) {
                distances[vertexName] = 0;
                queue.enqueue(vertexName, 0);
            } else {
                distances[vertexName] = Infinity;
                queue.enqueue(vertexName, Infinity);
            }
            previous[vertexName] = null;
        }

        let vertexName, distanceFromVertex1;
        while (!queue.isEmpty()) {
            vertexName = queue.dequeue();
            if (vertexName === vertex2) {
                break;
            }
            this.adjacencyList[vertexName].forEach((childVertex) => {
                distanceFromVertex1 =
                    distances[vertexName] + childVertex.weight;
                if (distanceFromVertex1 < distances[childVertex.name]) {
                    distances[childVertex.name] = distanceFromVertex1;
                    previous[childVertex.name] = vertexName;
                    queue.enqueue(childVertex.name, distanceFromVertex1);
                }
            });
        }

        //shortest distance:
        //return distances[vertex2];

        //shortest path:
        let shortestPath = [],
            prevVertexName = vertex2;
        while (previous[prevVertexName]) {
            shortestPath.push(prevVertexName);
            prevVertexName = previous[prevVertexName];
        }
        if (shortestPath.length) {
            shortestPath.push(vertex1);
        }
        shortestPath = shortestPath.reverse();
        return shortestPath;
    }
}

export default WeightedGraph;
