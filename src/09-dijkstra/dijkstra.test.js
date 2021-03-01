import { assert } from "chai";
import WeightedGraph from './dijkstra';

describe(`Dijkstra's shortest path algo`, () => {
    it(`should find a shortest distance between two vertices in a weighted graph using Dijkstra's algo`, () => {
        let g = new WeightedGraph();

        g.addVertex('A');
        g.addVertex('B');
        g.addVertex('C');
        g.addVertex('D');
        g.addVertex('E');
        g.addVertex('F');

        g.addEdge('A', 'B', 4);
        g.addEdge('A', 'C', 2);
        g.addEdge('B', 'E', 3);
        g.addEdge('C', 'D', 2);
        g.addEdge('C', 'F', 4);
        g.addEdge('D', 'E', 3);
        g.addEdge('D', 'F', 1);
        g.addEdge('E', 'F', 1);

        assert.sameOrderedMembers(g.Dijkstra('A', 'E'), ['A', 'C', 'D', 'F', 'E']);
    });
});
